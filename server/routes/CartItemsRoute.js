const express = require('express');
const CartItemsRouter = express.Router();

var CartItemsController = require('../controllers/CartItemsController',);

CartItemsRouter.post('/addProduct', CartItemsController.createProduct);
CartItemsRouter.get('/getProduct', CartItemsController.getProduct);
CartItemsRouter.get('/getProductbyID/:ProductID', CartItemsController.getProductbyID);
CartItemsRouter.put('/updateProduct/:ProductID', CartItemsController.updateProduct);
CartItemsRouter.delete('/deleteProduct/:ProductID', CartItemsController.deleteExistingProduct);

module.exports = CartItemsRouter;
