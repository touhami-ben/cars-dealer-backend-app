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
            "INSERT INTO cars (name, image_url, price, make, condition, is_available, color) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [
                car.name,
                car.image_url,
                car.price,
                car.make,
                car.condition,
                car.is_available,
                car.color
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
            "UPDATE cars SET (name=$1, image_url=$2, price=$3, make=$4, condition=$5, is_available=$6, color=$7) WHERE id=$8 RETURNING *",
            [car.name, car.image_url, car.price, car.make, car.condition, car.is_available, color, id]
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
    deleteCar,
    updateCar  
 };