const express = require("express");
const cars = express.Router();
const { getAllCars } = require("../queries/cars.js")


//index
cars.get("/", async(req, res) => {
    const allCars = await getAllCars();
    if (allCars[0]) {
    res.status(200).json(allCars);
    }else {
        res.status(500).json({error: "Server Error"});
    }
});

module.exports = cars;