const express = require("express");
const cars = express.Router();
const {
     getAllCars,
    getCar,
    createCar,
    deleteCar,
    updateCar
} = require("../queries/cars.js")


//index
cars.get("/", async(req, res) => {
    const allCars = await getAllCars();
    if (allCars) {
    res.status(200).json(allCars);
    }else {
        res.status(500).json({error: "Server Error"});
    }
});
//Show 
cars.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await getCar(id);
    if (error?.code === 0){
        res.status(404).json ({error: "Car Not Found"})
    }else if (error) {
        res.status(500).json({error: "Server Error"});

    } else {
        res.status(200).json(result);
    }
    // console.log(result)
});

    
//CREATE
cars.post("/", async (req, res) => {
    const { error, result} = await createCar (req.body);
    if (error) {
        res.status(500).json({error: "Server Error"});
    }else {
        res.status(200).json(result);
    }
});

// delete
cars.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await deleteCar(id);
    if (error) {
      res.status(404).json("car not found");
    } else {
      res.status(201).json(result);
    }
  });

  //update
  cars.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await updateCar(id, req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
    console.log(result)
  });
  


module.exports = cars; 