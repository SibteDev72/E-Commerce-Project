const express = require('express');
const WishListRouter = express.Router();

var WishListController = require('../controllers/WishListController');


WishListRouter.post('/addProduct', WishListController.createProduct);
WishListRouter.get('/getProduct', WishListController.getProduct);
WishListRouter.delete('/deleteProduct/:ProductID', WishListController.deleteExistingProduct);

module.exports = WishListRouter;