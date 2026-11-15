URL Shield – Web URL Validation and Phishing Detection System

Project Overview

URL Shield is a web-based application that validates URLs and detects potentially suspicious or phishing URLs using rule-based detection techniques.

The system analyzes URL structure, checks suspicious patterns, performs DNS lookup, and displays the analysis results to users.

Live Application

- Frontend: https://kavibharathi-2006.github.io/URL-Phishing-Detection/
- Backend: https://url-shield-backend.onrender.com

Objectives

- Validate HTTP and HTTPS URLs.
- Detect suspicious URL patterns.
- Identify misleading domain structures.
- Perform DNS lookup to obtain IP addresses.
- Store URL analysis results in MongoDB Atlas.
- Display analysis history and network activities.

Technologies Used

Frontend

- React.js
- HTML
- CSS
- JavaScript
- Axios
- Vite

Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

Concepts Integrated

Full Stack Web Development

- React frontend
- Node.js and Express backend
- MongoDB database connectivity
- REST API communication

Formal Languages and Automata Theory

- Deterministic Finite Automata (DFA)
- State transition diagram
- Transition table
- Regular expressions

Computer Networks

- HTTP and HTTPS communication
- DNS lookup
- IP addressing
- Port numbers
- Client-server architecture
- Network communication and packet flow

Project Modules

1. Dashboard – Displays URL analysis statistics.
2. URL Analyzer – Validates and analyzes submitted URLs.
3. Analysis History – Displays previously analyzed URLs.
4. Network Activity – Displays recorded API request activities.
5. URL Classification – Classifies URLs as Valid, Suspicious or Invalid.

URL Classification

Status| Description
Valid| URL follows the supported structure and no configured suspicious patterns were detected.
Suspicious| URL contains one or more suspicious patterns.
Invalid| URL does not satisfy the supported URL structure or domain validation rules.

Project Structure

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
│   └── server.js
│
├── FLAT/
│   ├── urlDFA.js
│   ├── stateTransitionDiagram.md
│   └── transitionTable.md
│
├── CN/
│   ├── ipAddressing.md
│   ├── networkCommunication.md
│   ├── networkFlow.md
│   ├── packetFlow.md
│   ├── portNumber.md
│   └── topology.md
│
└── README.md

How to Run the Project Locally

1. Start the Backend

cd backend
npm install
npm run dev

Backend runs at:

"http://localhost:5000"

2. Start the Frontend

Open another terminal:

cd frontend
npm install
npm run dev

Frontend runs at:

"http://localhost:5173"

Note: Configure the MongoDB Atlas connection string in the backend environment variables before starting the backend. Never commit actual database credentials or secret keys to GitHub.

Main Features

- URL structure validation
- DFA-based URL structure checking
- Suspicious pattern detection
- Misleading domain detection
- DNS lookup
- MongoDB analysis history
- Dashboard statistics
- Network activity monitoring
- URL analysis reasons and details

Disclaimer

URL Shield uses rule-based detection techniques for educational and demonstration purposes. A URL classified as Valid is not guaranteed to be completely safe. The system is intended as a learning and demonstration project and is not a replacement for professional cybersecurity solutions.