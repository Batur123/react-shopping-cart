require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const {initializeDatabase} = require('./database/database_control.js');
const {Products} = require('./database/products.js');
const productClass = new Products();

initializeDatabase();

const corsOptions = {
    origin: 'localhost',
    optionsSuccessStatus: 200,
};

app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions));

app.get('/',(req,res) => {
   res.send("-");
});

app.get("/getAllProducts", (req, res) => {
    return res.json(productClass.getAllProducts());
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});


