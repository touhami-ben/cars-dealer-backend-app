const db = require("../db/dbConfig");


const getAllCars = async () => {
    try {
        const allCars = await db.any("SELECT * FROM cars ORDER BY id");
        return allCars;

    }catch (error){
        return { error };
    }
};

const getCar = async (id) => {
    try {
        const oneCar = await db.oneOrNone(
            "SELECT * FROM cars WHERE id=$1",
            id
        );
        return { result: oneCar };

    }catch (error) {
        return { error };
    }
};
const createCar = async (car) => {
    try {
        const newCar = await db.one(
            "INSERT INTO cars (name, image_url, price, model, make, is_new) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [
                car.name,
                car.image_url,
                car.price,
                car.model,
                car.make,
                car.is_new,
            ]
        );
        return { result: newCar };

    } catch (error) {
        return {error};
    }
};
const deleteCar = async (id) => {
    try {
        const result = await db.one(
            "DELETE FROM cars WHERE id=$1 RETURNING *",
            id
        );
        return { result };
    }catch (error) {
        return {error};
    }
};

const updateCar = async (id, car) => {
    try {
        const result = await db.one(
            "UPDATE cars SET (name=$1, image_url=$2, price=$3, model=$4, make=$5, is_new=$6) WHERE id==$7 RETURNING *",
            [car.name, car.image_url, car.price, car.model, car.make, car.is_new, id]
        );
        return { result };

    } catch (error) {
        return { error };
    }
}

module.exports = { 
    getAllCars,
    getCar,
    createCar,
    // deleteCar,
    // updateCar  
 };