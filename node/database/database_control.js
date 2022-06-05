const db = require('better-sqlite3')('./database/Database.db');
exports.db = db;

const {Products} = require('./products.js');
const productClass = new Products();

const initializeDatabase = () => {

    productClass.createProductsTable();
    console.log("Database checked.");
}

exports.initializeDatabase = initializeDatabase;