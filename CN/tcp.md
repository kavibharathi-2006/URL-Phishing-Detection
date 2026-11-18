
# Transmission Control Protocol (TCP) – URL Shield

## 1. Introduction

TCP stands for Transmission Control Protocol. It is a connection-oriented transport layer protocol that provides reliable communication between devices over a network.

URL Shield uses HTTPS communication between the client browser and the Node.js backend. When HTTP/1.1 or HTTP/2 is used, TCP provides reliable data transmission.

## 2. Features of TCP

- Connection-oriented communication.
- Reliable data transmission.
- Error detection.
- Ordered delivery of data.
- Flow control.
- Congestion control.

## 3. TCP Three-Way Handshake

TCP establishes a connection using a three-way handshake.

1. SYN: The client sends a connection request to the server.
2. SYN-ACK: The server acknowledges the request.
3. ACK: The client confirms the connection.

After these three steps, data transmission can begin.

## 4. TCP Communication in URL Shield

1. The user opens the URL Shield application in a browser.
2. The browser establishes a secure HTTPS connection with the backend.
3. TCP provides reliable transport when the connection uses HTTP/1.1 or HTTP/2.
4. The frontend sends API requests to the backend.
5. The backend processes the request and sends a response.
6. TCP provides reliable and ordered delivery of data.

## 5. TCP Port Number

| Port | Purpose |
|---|---|
| 443 | HTTPS communication |
| 5000 | Local backend development |
| 10000 | Internal Render backend port in this deployment |

The deployed application is accessed through HTTPS using port 443. The backend's internal port is configured by the hosting platform.

## 6. TCP and URL Shield Architecture

The TCP protocol supports reliable communication between the client browser and the backend server when HTTP/1.1 or HTTP/2 is used.

The application uses HTTPS for secure communication and TCP as its transport protocol in these connections.

## 7. Conclusion

TCP plays an important role in reliable network communication. In URL Shield, it supports the transfer of HTTPS requests and responses between the client and backend when TCP-based HTTP versions are used.
