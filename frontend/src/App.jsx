
import { useState, useEffect } from "react";
import axios from "axios";
import {
  ShieldCheck,
  Link2,
  Search,
  History,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Globe,
  Activity,
  Trash2,
  Network
} from "lucide-react";
import "./App.css";

const API_URL = "http://localhost:5000/api/url";
const NETWORK_API_URL = "http://localhost:5000/api/network-activity";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [networkActivity, setNetworkActivity] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    valid: 0,
    suspicious: 0,
    invalid: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchHistory = async () => {
    try {
      const response = await axios.get(`${API_URL}/history`);
      setHistory(response.data);
    } catch {
      setError("Unable to load analysis history. Check the backend server.");
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/stats`);
      setStats(response.data);
    } catch {
      setError("Unable to load URL statistics.");
    }
  };

  const fetchNetworkActivity = async () => {
    try {
      const response = await axios.get(NETWORK_API_URL);
      setNetworkActivity(response.data);
    } catch {
      setError("Unable to load network activity.");
    }
  };

  const refreshDashboard = async () => {
    await Promise.all([
      fetchHistory(),
      fetchStats(),
      fetchNetworkActivity()
    ]);
  };

  useEffect(() => {
    refreshDashboard();
  }, []);

  const analyzeURL = async (e) => {
    e.preventDefault();

    const value = url.trim();

    if (!value) {
      setResult({
        status: "Invalid",
        url: "",
        reasons: ["Please enter a URL."],
        details: null,
        dnsInfo: null
      });
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${API_URL}/analyze`, {
        url: value
      });

      setResult(response.data);
      setUrl("");

      await refreshDashboard();
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Unable to analyze URL. Please check the backend server."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = async () => {
    try {
      await axios.delete(`${API_URL}/history`);
      setHistory([]);
      setStats({
        total: 0,
        valid: 0,
        suspicious: 0,
        invalid: 0
      });
      setResult(null);
      setError("");
      await fetchNetworkActivity();
    } catch {
      setError("Unable to clear analysis history.");
    }
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <ShieldCheck size={27} />
          </div>
          <div>
            <h2>URL Shield</h2>
            <span>Security Analyzer</span>
          </div>
        </div>

        <nav>
          <a className="nav-link active" href="#dashboard">
            <Activity size={19} /> Dashboard
          </a>
          <a className="nav-link" href="#analyzer">
            <Search size={19} /> URL Analyzer
          </a>
          <a className="nav-link" href="#history">
            <History size={19} /> Analysis History
          </a>
          <a className="nav-link" href="#network">
            <Network size={19} /> Network Activity
          </a>
        </nav>

        <div className="sidebar-bottom">
          <ShieldCheck size={19} />
          <span>Stay Safe Online</span>
        </div>
      </aside>

      <main className="main-content" id="dashboard">
        <header className="topbar">
          <div>
            <p className="breadcrumb">HOME / DASHBOARD</p>
            <h1>Security Dashboard</h1>
          </div>
          <div className="system-status">
            <span className="status-dot"></span>
            System Ready
          </div>
        </header>

        <section className="welcome">
          <div>
            <span className="welcome-label">WEB SECURITY TOOL</span>
            <h2>Analyze. Detect. Stay Protected.</h2>
            <p>
              Check website URLs for suspicious patterns and
              potentially misleading structures.
            </p>
          </div>
          <div className="welcome-icon">
            <ShieldCheck size={75} />
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue">
              <Globe size={22} />
            </div>
            <p>Total Analyzed</p>
            <h2>{stats.total}</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <CheckCircle2 size={22} />
            </div>
            <p>Valid URLs</p>
            <h2>{stats.valid}</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <AlertTriangle size={22} />
            </div>
            <p>Suspicious URLs</p>
            <h2>{stats.suspicious}</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon red">
              <XCircle size={22} />
            </div>
            <p>Invalid URLs</p>
            <h2>{stats.invalid}</h2>
          </div>
        </section>

        <section className="analyzer-card" id="analyzer">
          <div className="section-heading">
            <div className="heading-icon">
              <Link2 size={23} />
            </div>
            <div>
              <h2>URL Security Analyzer</h2>
              <p>Enter a website URL to check its structure.</p>
            </div>
          </div>

          <form onSubmit={analyzeURL}>
            <label htmlFor="url">Website URL</label>
            <div className="input-group">
              <Globe size={20} />
              <input
                id="url"
                type="text"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button type="submit" disabled={loading}>
                <Search size={18} />
                {loading ? "Analyzing..." : "Analyze URL"}
              </button>
            </div>
          </form>

          {error && <p className="error-message">{error}</p>}

          {result && (
            <div className={`result-box ${result.status.toLowerCase()}`}>
              <div className="result-heading">
                <div>
                  <span className="result-label">ANALYSIS RESULT</span>
                  <h3>{result.status} URL</h3>
                </div>

                {result.status === "Valid" ? (
                  <CheckCircle2 size={32} />
                ) : result.status === "Suspicious" ? (
                  <AlertTriangle size={32} />
                ) : (
                  <XCircle size={32} />
                )}
              </div>

              <p className="analyzed-url">{result.url}</p>

              <h4>Detection Reasons</h4>
              <ul>
                {result.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>

              {result.details && (
                <div className="url-details">
                  <h4>URL Structure Details</h4>

                  <p>
                    <strong>Protocol:</strong>{" "}
                    {result.details.protocol.toUpperCase()}
                  </p>

                  <p>
                    <strong>Domain:</strong> {result.details.domain}
                  </p>

                  <p>
                    <strong>Path:</strong> {result.details.path}
                  </p>

                  <p>
                    <strong>Subdomain Count:</strong>{" "}
                    {result.details.subdomainCount}
                  </p>

                  <p>
                    <strong>URL Length:</strong>{" "}
                    {result.details.urlLength} characters
                  </p>
                </div>
              )}

              {result.dnsInfo && (
                <div className="url-details">
                  <h4>
                    <Network size={19} /> DNS Lookup Details
                  </h4>

                  <p>
                    <strong>DNS Status:</strong>{" "}
                    {result.dnsInfo.status}
                  </p>

                  <p>
                    <strong>Domain:</strong>{" "}
                    {result.dnsInfo.domain}
                  </p>

                  {result.dnsInfo.ipAddresses?.length > 0 ? (
                    <div>
                      <p><strong>Resolved IP Addresses:</strong></p>
                      {result.dnsInfo.ipAddresses.map((item, index) => (
                        <p key={index}>
                          <strong>IP {index + 1}:</strong>{" "}
                          {item.address} (IPv{item.family})
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p>
                      <strong>DNS Message:</strong>{" "}
                      {result.dnsInfo.message || "No IP addresses found"}
                    </p>
                  )}
                </div>
              )}

              <p className="disclaimer">
                This rule-based demonstration does not guarantee that a URL is safe.
              </p>
            </div>
          )}
        </section>

        <section className="history-card" id="history">
          <div className="history-heading">
            <div>
              <h2>Recent Analysis</h2>
              <p>Your saved URL analysis activity</p>
            </div>

            <button
              className="clear-button"
              onClick={clearHistory}
              disabled={history.length === 0}
            >
              <Trash2 size={16} /> Clear History
            </button>
          </div>

          {history.length === 0 ? (
            <div className="empty-history">
              <History size={35} />
              <h3>No analysis yet</h3>
              <p>Enter a URL above to start analyzing websites.</p>
            </div>
          ) : (
            <div className="history-list">
              {history.map((item) => (
                <div className="history-item" key={item._id}>
                  <div>
                    <strong>{item.url}</strong>

                    <span>
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleString()
                        : ""}
                    </span>

                    <div className="history-reasons">
                      <strong>Detection Reasons:</strong>
                      <ul>
                        {(item.reasons || []).map((reason, index) => (
                          <li key={index}>{reason}</li>
                        ))}
                      </ul>
                    </div>

                    {item.details && (
                      <div className="history-url-details">
                        <strong>URL Structure Details</strong>

                        <p>
                          <strong>Protocol:</strong>{" "}
                          {item.details.protocol?.toUpperCase() || "N/A"}
                        </p>

                        <p>
                          <strong>Domain:</strong>{" "}
                          {item.details.domain || "N/A"}
                        </p>

                        <p>
                          <strong>Path:</strong>{" "}
                          {item.details.path || "N/A"}
                        </p>

                        <p>
                          <strong>Subdomain Count:</strong>{" "}
                          {item.details.subdomainCount ?? "N/A"}
                        </p>

                        <p>
                          <strong>URL Length:</strong>{" "}
                          {item.details.urlLength ?? "N/A"} characters
                        </p>
                      </div>
                    )}

                    {item.dnsInfo && (
                      <div className="history-url-details">
                        <strong>DNS Lookup Details</strong>

                        <p>
                          <strong>DNS Status:</strong>{" "}
                          {item.dnsInfo.status || "N/A"}
                        </p>

                        <p>
                          <strong>Domain:</strong>{" "}
                          {item.dnsInfo.domain || "N/A"}
                        </p>

                        {item.dnsInfo.ipAddresses?.length > 0 ? (
                          <div>
                            <p><strong>Resolved IP Addresses:</strong></p>
                            {item.dnsInfo.ipAddresses.map((ip, index) => (
                              <p key={index}>
                                <strong>IP {index + 1}:</strong>{" "}
                                {ip.address} (IPv{ip.family})
                              </p>
                            ))}
                          </div>
                        ) : (
                          <p>
                            <strong>DNS Message:</strong>{" "}
                            {item.dnsInfo.message || "No IP addresses found"}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <span className={`history-status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="history-card" id="network">
          <div className="history-heading">
            <div>
              <h2>
                <Network size={21} /> Network Activity
              </h2>
              <p>HTTP requests between frontend and backend</p>
            </div>

            <button
              className="clear-button"
              onClick={fetchNetworkActivity}
            >
              <Activity size={16} /> Refresh
            </button>
          </div>

          {networkActivity.length === 0 ? (
            <div className="empty-history">
              <Network size={35} />
              <h3>No network activity</h3>
              <p>Perform an action to record HTTP requests.</p>
            </div>
          ) : (
            <div className="history-list">
              {networkActivity.map((item, index) => (
                <div className="history-item" key={index}>
                  <div>
                    <strong>
                      {item.method} - {item.path}
                    </strong>
                    <span>
                      {item.protocol.toUpperCase()}://{item.host}
                    </span>
                    <span>{item.requestTime}</span>
                  </div>

                  <span className="history-status">
                    {item.method}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        <footer>
          <p>
            URL Shield – Web URL Validation and Phishing Detection System
          </p>
          <span>Academic Project | 2026–2027</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
