
# IP Addressing – URL Shield

## 1. Introduction

IP addressing is used to identify devices and servers in a network. URL Shield uses IP-based communication between the client browser and the cloud-hosted backend server.

## 2. IP Address Details

| Component | Domain / IP Address | Description |
|---|---|---|
| Client | Public IP assigned by ISP | Identifies the client network on the Internet |
| Frontend | kavibharathi-2006.github.io | React frontend hosted on GitHub Pages |
| Backend Server | url-shield-backend.onrender.com | Node.js and Express backend hosted on Render |
| Backend IPv4 | 216.24.57.16, 216.24.57.18 | Example IPv4 addresses previously observed during DNS lookup |

Note: Cloud service IP addresses may change. The listed backend IP addresses are previously observed DNS results and may not represent the current addresses.

## 3. Client and Server Communication

1. The client browser connects to the URL Shield frontend.
2. The frontend sends an HTTPS request to the Render backend domain.
3. DNS resolution identifies the IP address associated with the backend domain.
4. The client network sends the request through the Internet to the backend server.
5. The backend processes the request and performs URL validation.
6. The backend sends the response back to the frontend through the established network connection.

## 4. Role of DNS

DNS stands for Domain Name System. It translates a domain name into an IP address.

Example:

Backend domain: https://url-shield-backend.onrender.com

DNS resolves the domain name into an IP address so that the client can communicate with the backend server.

## 5. IP Address Types

### IPv4

IPv4 uses a 32-bit address. Example format: 192.168.1.10.

### IPv6

IPv6 uses a 128-bit address. It provides a much larger address space than IPv4.

## 6. Conclusion

IP addressing enables communication between the client and the URL Shield backend server. DNS helps resolve the backend domain into its IP address, allowing the client to send requests and receive responses through the Internet.
