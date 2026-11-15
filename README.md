
# URL Shield – Web URL Validation and Phishing Detection System

## Project Overview

URL Shield is a web-based application that validates URLs and detects potentially suspicious or phishing URLs using rule-based detection techniques.

The system analyzes URL structure, checks suspicious patterns, performs DNS lookup, and displays the analysis results to users.

## Objectives

- Validate HTTP and HTTPS URLs.
- Detect suspicious URL patterns.
- Identify misleading domain structures.
- Perform DNS lookup to obtain IP addresses.
- Store URL analysis results in MongoDB.
- Display analysis history and network activities.

## Technologies Used

### Frontend
- React.js
- HTML
- CSS
- JavaScript
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Concepts Integrated
- Deterministic Finite Automata (DFA)
- Regular Expressions
- HTTP Communication
- DNS Lookup
- Client-Server Architecture

## Project Modules

1. Dashboard
2. URL Analyzer
3. Analysis History
4. Network Activity

## URL Classification

| Status | Description |
|---|---|
| Valid | URL follows the supported structure and no configured suspicious patterns were detected. |
| Suspicious | URL contains one or more suspicious patterns. |
| Invalid | URL does not satisfy the supported URL structure or domain validation rules. |

## Project Structure

```text
URL-Phishing-Detection/
│
├── frontend/
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── backend/
│   ├── middleware/
│   │   └── networkLogger.js
│   ├── models/
│   │   └── URL.js
│   ├── routes/
│   │   └── urlRoutes.js
│   ├── services/
│   │   └── dnsService.js
│   ├── utils/
│   │   └── urlValidator.js
│   ├── server.js
│   └── .env
│
├── FLAT/
│   ├── urlDFA.js
│   ├── stateTransitionDiagram.md
│   └── transitionTable.md
│
├── CN/
│   ├── networkCommunication.md
│   └── networkFlow.md
│
└── README.md
```

## How to Run the Project

### 1. Start the Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs at:

```text
http://localhost:5000
```

### 2. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

## Main Features

- URL structure validation
- Suspicious pattern detection
- DNS lookup
- MongoDB analysis history
- Dashboard statistics
- Network activity monitoring
- URL analysis reasons and details

## Disclaimer

URL Shield uses rule-based detection techniques for educational and demonstration purposes. A URL classified as Valid is not guaranteed to be completely safe.
