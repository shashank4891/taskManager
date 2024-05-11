# Task Manager App

This is a simple Task Manager application built with React for the frontend and Node.js with Express for the backend. It allows users to manage their tasks by adding, updating, and deleting them.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Clean and intuitive user interface

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally

### Installation

1. Clone the repository:

```bash
git clone <https://github.com/shashank4891/taskManager/>
```

2. Navigate to the project directory:

```bash
cd <project-folder>
```

3. Install dependencies for both frontend and backend:

```bash
# Navigate to client folder and install frontend dependencies
cd client
npm install

# Navigate to server folder and install backend dependencies
cd ../server
npm install
```

## Configuration

1. Create a `.env` file in the `server` directory and add the following environment variables:

```bash
PORT=5000
MONGODB_URI=<your-mongodb-uri>
```

2. Replace <your-mongodb-uri> with your MongoDB connection URI

## Running the Application

1. Start the backend server:

```bash
# Navigate to server directory
cd server
# Start the server
npm start
```

2. Start the frontend development server:

```bash
# Navigate to client directory
cd client
# Start the React development server
npm start
```

3. Access the application in your web browser at http://localhost:3000.

## API Endpoints

### GET /api/todos

- Description: Get all tasks
- Method: GET

### POST /api/todos

- Description: Add a new task
- Method: POST
- Request Body: 
  ```json
  {
    "todo": "Task content"
  }
- Response Body: 
  ```json
  {
  "todo": "Task content",
  "status": false,
  "_id": "Task ID"
  }

### PUT /api/todos/:id

- Description: Update task status
- Method: PUT
- Parameters: id (Task ID)
- Request Body: 
  ```json
  {
    "status": true
  }
- Response Body: 
  ```json
  {
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
  }

 ### Delete /api/todos/:id

- Description: Delete a task
- Method: DELETE
- Parameters: id (Task ID)
- Response Body: 
  ```json
  {
  "acknowledged": true,
  "deletedCount": 1
  }

 ## Folder Structure
 - `client/`: Contains the React frontend code
 - `server/`: Contains the Node.js backend code

 ## Contributing

 Contributions are welcome! Feel free to open issues or submit pull requests.

 ## License

 This project is licensed under the ISC License.




