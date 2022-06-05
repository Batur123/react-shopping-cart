const {db} = require('./database_control.js');
const { v4: uuidv4 } = require('uuid');

class Products {
    createProductsTable() {
        const isProductsExists = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?").get("tbl_products");

        if(isProductsExists === undefined) {
            db.exec("CREATE TABLE IF NOT EXISTS `tbl_products` (product_id TEXT,product_name TEXT,price INTEGER)");

            db.prepare("INSERT INTO `tbl_products` (product_id,product_name, price) VALUES (?,?,?)").run(uuidv4(),"Esya1",10.32);
            db.prepare("INSERT INTO `tbl_products` (product_id,product_name, price) VALUES (?,?,?)").run(uuidv4(),"Esya2",10.10);
            db.prepare("INSERT INTO `tbl_products` (product_id,product_name, price) VALUES (?,?,?)").run(uuidv4(),"Esya3",121.34);
            db.prepare("INSERT INTO `tbl_products` (product_id,product_name, price) VALUES (?,?,?)").run(uuidv4(),"Esya4",32.82);
            db.prepare("INSERT INTO `tbl_products` (product_id,product_name, price) VALUES (?,?,?)").run(uuidv4(),"Esya5",121.32);
            db.prepare("INSERT INTO `tbl_products` (product_id,product_name, price) VALUES (?,?,?)").run(uuidv4(),"Esya6",54.64);
            db.prepare("INSERT INTO `tbl_products` (product_id,product_name, price) VALUES (?,?,?)").run(uuidv4(),"Esya7",63.43);
        }
    }

    getAllProducts() {
        return db.prepare("SELECT * FROM `tbl_products`").all();
    }
}

exports.Products = Products;




