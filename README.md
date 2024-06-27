# Realtors

Real estate portal designed to connect buyers and sellers through a user-friendly interface. This MERN stack project leverages MongoDB, Express, React, and Node.js, with additional features from Firebase for authentication and data handling.

## Features
- User authentication and session management with Firebase.
- Real-time property listings with options to view, add, delete, and update.
- Responsive and modern interface using Tailwind CSS.

## Prerequisites
- Node.js
- npm or yarn
- MongoDB
- Firebase account (for authentication and database services)

## Setup

Clone the repository:

`git clone https://your-project-repository-url](https://github.com/Nikhil-Gowda-T-P/Realtors)
cd Realtor`

### Backend Setup
Navigate to the backend directory and install dependencies:
`cd api
npm install`

Create a .env file in the api directory with the following contents:
`DB_URI=<your_mongodb_uri>
PORT=5000
JWT_SECRET=<your_jwt_secret>
`
Start the backend server:
`npm run dev`

Frontend Setup
Navigate to the frontend directory and install dependencies:
`cd ../client
npm install
`
Create a .env file in the client directory with the following Firebase configurations:
`VITE_FIREBASE_API_KEY=<your_firebase_api_key>
VITE_FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
VITE_FIREBASE_PROJECT_ID=<your_firebase_project_id>
`
Start the frontend application:
`npm run dev`

### Usage
Once both servers are running, open http://localhost:3000 in a browser to access the Realtors portal.

### snapshots


### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



