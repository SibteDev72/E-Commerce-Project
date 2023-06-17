const express = require('express');
const CustomerRouter = express.Router();

var CustomerController = require('../controllers/CustomerController');

CustomerRouter.post('/addCustomer', CustomerController.createCustomer);
CustomerRouter.get('/getCustomer', CustomerController.getCustomer);
CustomerRouter.get('/getCustomerbyID/:CustomerID', CustomerController.getCustomerbyID);
CustomerRouter.delete('/deleteCustomer/:CustomerID', CustomerController.deleteExistingCustomer);

module.exports = CustomerRouter;
