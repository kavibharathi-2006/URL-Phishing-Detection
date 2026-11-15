
# Packet Flow – URL Shield

## 1. Introduction

Packet flow explains how data travels from the client to the server and how the response returns to the client.

URL Shield uses HTTPS communication between the React frontend and Node.js backend.

## 2. Packet Flow Diagram

```mermaid
flowchart TD
    A[User enters URL]
    B[Client Browser]
    C[DNS Resolution]
    D[Internet and Network Routers]
    E[React Frontend]
    F[HTTPS POST Request - Port 443]
    G[Render Backend Server]
    H[URL Validation and Phishing Detection]
    I[DNS Lookup of Submitted Domain]
    J[MongoDB Atlas Database]
    K[JSON Response]
    L[Frontend Displays Result]

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H --> I
    I --> J
    J --> K
    K --> L
```

## 3. Request Flow

1. The user enters a URL in the browser.
2. The browser loads the React frontend.
3. DNS resolves the backend domain into its IP address.
4. The frontend sends an HTTPS POST request to the Render backend.
5. The request reaches the backend through the Internet.
6. The Render service forwards the request to the Node.js and Express application.
7. The backend validates the submitted URL using DFA and validation rules.
8. The backend performs DNS lookup to obtain the submitted domain's IP address.
9. The analysis result is stored in MongoDB Atlas.

## 4. Response Flow

1. MongoDB Atlas responds to the backend after storing the analysis result.
2. The backend prepares a JSON response containing the URL status, reasons, URL details and DNS information.
3. The response travels back through the established HTTPS connection.
4. The React frontend receives the JSON response.
5. The frontend displays the analysis result to the user.

## 5. Protocols and Ports

| Protocol | Port | Purpose |
|---|---|---|
| HTTPS | 443 | Secure communication between browser and deployed backend |
| DNS | 53 | Domain name resolution |
| MongoDB | 27017 | Default MongoDB database connection port |

The Render backend uses an internal application port of 10000 in this deployment.

## 6. Network Communication

The application follows a client-server communication model. The frontend sends an HTTP request over HTTPS, and the backend returns a JSON response.

Network routers forward data between networks. TCP provides reliable transport for HTTPS connections when HTTP/1.1 or HTTP/2 is used.

## 7. Conclusion

Packet flow in URL Shield demonstrates how a client request travels through the Internet to the backend server, how URL validation and database operations are performed, and how the analysis response returns to the frontend.
