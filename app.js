const express = require("express");
const cors = require("cors");
const carsController = require("./controllers/carsController.js");




//CONFIG

const app = express();

//Middleware
app.use(cors());
app.use(express.json());



//routes

app.get("/", (req, res) => {
    res.send("Welcome to Atlantic cars dealer")
});
app.use("/cars", carsController)

app.get("*", (req, res) => {
    res.status(404).send("Page not found")
})

module.exports = app;