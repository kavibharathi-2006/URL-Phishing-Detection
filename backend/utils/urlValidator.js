
const { isIP } = require("net");

const {
    isValidURLStructure
} = require("../../FLAT/urlDFA");

function checkDFA(url) {
    return isValidURLStructure(url);
}

function validateURL(inputURL) {
    const url = inputURL.trim();

    let status = "Valid";
    const reasons = [];

    if (!checkDFA(url)) {
        return {
            status: "Invalid",
            reasons: [
                "URL does not follow the HTTP or HTTPS protocol structure"
            ],
            details: null
        };
    }

    let parsedURL;

    try {
        parsedURL = new URL(url);
    } catch {
        return {
            status: "Invalid",
            reasons: ["Malformed URL"],
            details: null
        };
    }

    if (!["http:", "https:"].includes(parsedURL.protocol)) {
        return {
            status: "Invalid",
            reasons: ["Unsupported URL protocol"],
            details: null
        };
    }

    const hostname = parsedURL.hostname.toLowerCase();
    const cleanHostname = hostname.replace(/^\[|\]$/g, "");

    const domainRegex =
        /^(?=.{1,253}$)(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[A-Za-z]{2,}$/;

    if (isIP(cleanHostname)) {
        status = "Suspicious";
        reasons.push(
            "URL uses an IP address instead of a domain name"
        );
    } else if (!domainRegex.test(hostname)) {
        return {
            status: "Invalid",
            reasons: ["Invalid domain name"],
            details: null
        };
    }

    if (parsedURL.username || parsedURL.password) {
        status = "Suspicious";
        reasons.push(
            "URL contains hidden username or password information"
        );
    }

    const knownBrandDomains = [
        "google.com",
        "microsoft.com",
        "apple.com",
        "paypal.com",
        "amazon.com",
        "facebook.com",
        "instagram.com",
        "netflix.com"
    ];

    const misleadingDomain = knownBrandDomains.some(brand => {
        return hostname.includes(brand) &&
            hostname !== brand &&
            hostname !== `www.${brand}`;
    });

    if (misleadingDomain) {
        status = "Suspicious";
        reasons.push(
            "URL contains a known brand name in a misleading domain structure"
        );
    }

    const suspiciousKeywords = [
        "login",
        "verify",
        "update-account",
        "secure-payment",
        "banking",
        "password",
        "signin"
    ];

    const pathAndQuery =
        (parsedURL.pathname + parsedURL.search).toLowerCase();

    if (
        suspiciousKeywords.some(keyword =>
            pathAndQuery.includes(keyword)
        )
    ) {
        status = "Suspicious";
        reasons.push(
            "URL contains suspicious keywords"
        );
    }

    if (url.length > 100) {
        status = "Suspicious";
        reasons.push(
            "URL length is unusually long"
        );
    }

    const subdomainCount = Math.max(
        0,
        hostname.split(".").length - 2
    );

    if (hostname.split(".").length > 4) {
        status = "Suspicious";
        reasons.push(
            "URL contains too many subdomains"
        );
    }

    if (reasons.length === 0) {
        reasons.push(
            "No suspicious patterns detected by the current rules"
        );
    }

    const details = {
        protocol: parsedURL.protocol.replace(":", ""),
        domain: hostname,
        path: parsedURL.pathname,
        subdomainCount,
        urlLength: url.length
    };

    return {
        status,
        reasons,
        details
    };
}

module.exports = {
    checkDFA,
    validateURL
};
