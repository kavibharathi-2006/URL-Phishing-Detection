
# Port Number Configuration – URL Shield

## 1. Introduction

A port number identifies a specific service or application running on a device. URL Shield uses different port numbers for frontend, backend and database communication.

## 2. Port Numbers Used

| Port Number | Service | Purpose |
|---|---|---|
| 443 | HTTPS | Secure communication between browser and cloud-hosted services |
| 5173 | React Vite | Frontend development server during local testing |
| 5000 | Node.js and Express | Backend development server during local testing |
| 10000 | Render Backend | Internal port used by the deployed backend service |
| 27017 | MongoDB | Default port for MongoDB database connections |

## 3. Explanation

### Port 443 – HTTPS

Port 443 is used for secure communication between the user's browser and the deployed frontend and backend services.

### Port 5173 – Frontend

Port 5173 is used by the Vite development server when running the React frontend locally.

### Port 5000 – Backend

Port 5000 is used by the Express backend during local development. It handles API requests from the frontend.

### Port 10000 – Render

The deployed backend runs using the internal port configured by Render. In this project, the backend log showed port 10000. Users access the backend through its public HTTPS address, normally using port 443.

### Port 27017 – MongoDB

Port 27017 is the default MongoDB service port. The backend connects to MongoDB Atlas using its database connection configuration.

## 4. Conclusion

Port numbers help identify the services involved in URL Shield. HTTPS uses port 443 for public secure communication, while separate ports are used for local development, backend hosting and database connectivity.
