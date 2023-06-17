const express = require('express');
const ProductRouter = express.Router();

var ProductController = require('../controllers/ProductController');


ProductRouter.post('/addProduct', ProductController.createProduct);
ProductRouter.get('/getProduct', ProductController.getProduct);
ProductRouter.get('/getProductbyID/:ProductID', ProductController.getProductbyID);
ProductRouter.put('/updateProduct/:ProductID', ProductController.updateProduct);
ProductRouter.delete('/deleteProduct/:ProductID', ProductController.deleteExistingProduct);

module.exports = ProductRouter;