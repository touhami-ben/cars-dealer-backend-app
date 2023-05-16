const express = require("express");
const cors = require("cors");


//CONFIG

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//routes

app.get("/", (req, res) => {
    res.send("Welcome to Name cars dealer")
});

module.exports = app;