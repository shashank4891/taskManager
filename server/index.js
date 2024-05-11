require("dotenv").config();

// import express
const express = require("express");
const { connectToMongoDB } = require("./database");

// create an instance of express called app
const app = express();
app.use(express.json());

// import our todos router
const router = require("./routes");

// use /api to prefix our endpoints
app.use("/api", router);

// create a test router
app.get("/hello", (req, res) => {
    res.status(200).json({ mssg: "hello" });
});

// create a port variable
const port = process.env.PORT || 5000;

const startServer = async () => {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
};
startServer();