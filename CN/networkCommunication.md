
# Computer Networks – URL Shield

## 1. Client-Server Communication

The URL Shield application follows the client-server architecture.

- Client: React frontend running on port 5173.
- Server: Node.js and Express backend running on port 5000.
- Database: MongoDB Atlas stores URL analysis results.

The frontend sends HTTP requests to the backend API. The backend processes the request and sends the response to the frontend.

## 2. HTTP Communication

HTTP stands for Hypertext Transfer Protocol.

In this project, HTTP is used for communication between the React frontend and Express backend.

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

The DNS result is stored along with the URL analysis record in MongoDB.

## 4. Network Activity Monitoring

The application uses Express middleware to record HTTP request information.

The recorded details include:
- HTTP method
- API request path
- Protocol
- Host
- Request time

These activities are displayed in the Network Activity section of the dashboard.

## 5. Network Communication Flow

1. The user enters a URL in the React frontend.
2. The frontend sends a POST request to the backend.
3. The backend validates the URL.
4. The backend performs DNS lookup for the domain.
5. The analysis result and DNS information are stored in MongoDB Atlas.
6. The backend sends the result to the frontend.
7. The frontend displays the analysis result.

## 6. Technologies Used

- HTTP – Communication between frontend and backend.
- DNS – Domain name resolution.
- Node.js – Backend runtime.
- Express.js – Backend API and middleware.
- MongoDB Atlas – Cloud database.
- React – Frontend interface.
