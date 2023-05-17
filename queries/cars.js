const db = require("../db/dbConfig");


const getAllCars = async () => {
    try {
        const allCars = await db.any("SELECT * FROM cars ORDER BY id");
        return allCars;

    }catch (error){
        throw error;
    }
};

module.exports = { getAllCars};