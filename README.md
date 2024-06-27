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

### Snapshots
#### Landing UI
---
<img width="1470" alt="Screenshot 2024-06-27 at 4 46 17 PM" src="https://github.com/arcane77/Realtors/assets/96630482/35c5d9a6-9797-4b6d-9d66-e1502c648ea9">

#### Listings
---
<img width="1470" alt="Screenshot 2024-06-27 at 4 46 26 PM" src="https://github.com/arcane77/Realtors/assets/96630482/5bf8bf9a-8e5a-422b-a04c-3677cc9b5cd3">

#### Property Details
---
<img width="1470" alt="Screenshot 2024-06-27 at 4 47 25 PM" src="https://github.com/arcane77/Realtors/assets/96630482/ab01b2f0-9e1e-42c4-98cd-322833756c6c">

#### Property by search
---
<img width="1470" alt="Screenshot 2024-06-27 at 4 48 51 PM" src="https://github.com/arcane77/Realtors/assets/96630482/1f20057f-9cee-4afb-8dad-f822401f543a">

#### Create Listings
---
<img width="1470" alt="Screenshot 2024-06-27 at 4 53 36 PM" src="https://github.com/arcane77/Realtors/assets/96630482/1b227383-99da-4113-b21a-4ac07f56d897">

#### User Profile along with Listings created
---
<img width="1470" alt="Screenshot 2024-06-27 at 4 48 30 PM" src="https://github.com/arcane77/Realtors/assets/96630482/bf32aab8-4c40-48d8-b10d-177182f666c9">
---


### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



