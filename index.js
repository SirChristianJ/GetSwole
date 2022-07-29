const express = require("express");
const app = express();
const PORT = 8800;
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, () => {
    console.log("Connected to MongoDB!")
});

app.listen(PORT, () => {
    console.log("Server is live on port: " + PORT)
});