const express = require('express');
const CategoryRouter = express.Router();

var CategoryController = require('../controllers/CategoryController');


CategoryRouter.post('/addCategory', CategoryController.createCategory);
CategoryRouter.get('/getCategory', CategoryController.getCategory);
CategoryRouter.get('/getCategorybyID/:CategoryID', CategoryController.getCategorybyID);
CategoryRouter.put('/updateCategory/:CategoryID', CategoryController.updateCategory);
CategoryRouter.delete('/deleteCategory/:CategoryID', CategoryController.deleteExistingCategory);

module.exports = CategoryRouter;