
# Computer Networks – URL Shield

## 1. Client-Server Communication

The URL Shield application follows the client-server architecture.

Client: User's web browser accessing the React frontend hosted on GitHub Pages.

Frontend: React application hosted on GitHub Pages.

Backend: Node.js and Express application hosted on Render.

Database: MongoDB Atlas stores URL analysis results.

The frontend sends HTTPS requests to the backend API. The backend processes the requests and sends JSON responses to the frontend.

Local Development Ports:
- React frontend: 5173
- Node.js backend: 5000

These ports are used during local development. The deployed application communicates through HTTPS.

## 2. HTTP and HTTPS Communication

HTTP stands for Hypertext Transfer Protocol.

HTTPS stands for Hypertext Transfer Protocol Secure. It provides encrypted communication using TLS.

The deployed URL Shield application uses HTTPS for communication between the frontend and backend.

Examples of API requests:

- POST /api/url/analyze – Analyzes a submitted URL.
- GET /api/url/history – Retrieves previous URL analysis records.
- GET /api/url/stats – Retrieves analysis statistics.
- DELETE /api/url/history – Clears analysis history.
- GET /api/network-activity – Retrieves recorded HTTP request activity.

## 3. DNS Lookup

DNS stands for Domain Name System.

DNS converts a domain name into its corresponding IP address.

Example:

Domain: google.com

The application uses Node.js DNS lookup to retrieve the available IP addresses.

The result may contain:

- IPv4 address
- IPv6 address

The DNS result is stored along with the URL analysis record in MongoDB Atlas.

## 4. Network Activity Monitoring

The application uses Express middleware to record HTTP request information.

The recorded details include:

- HTTP method
- API request path
- Protocol
- Host
- Request time

These activities are displayed in the Network Activity section of the dashboard.

This middleware records application-level HTTP request information. It is not a raw packet capture tool.

## 5. Network Communication Flow

1. The user enters a URL in the React frontend.
2. The frontend sends an HTTPS POST request to the Render backend.
3. The backend validates the URL.
4. The backend performs DNS lookup for the domain when applicable.
5. The analysis result and DNS information are stored in MongoDB Atlas.
6. The backend sends a JSON response to the frontend.
7. The frontend displays the analysis result.

## 6. Technologies Used

- HTTP/HTTPS – Communication between frontend and backend.
- DNS – Domain name resolution.
- Node.js – Backend runtime.
- Express.js – Backend API and middleware.
- MongoDB Atlas – Cloud database.
- React – Frontend interface.

## 7. Conclusion

URL Shield demonstrates client-server communication using HTTPS, DNS resolution and cloud database connectivity. These networking concepts enable the application to analyze URLs, retrieve DNS information and store analysis results.
