var CustomerModel = require('../schemas/CustomerSchema');

module.exports = {

    createCustomer:function(req,res)
    {
        CustomerModel.create(req.body).then(() => {
            res.send("Your Customer is Saved in DATABASE");
        })
        .catch( (err) => {
            res.send("Something went wrong!!!!"+err);
        }) 
    }
    ,
    getCustomer:function(req,res)
    {
        CustomerModel.find().then((results) => {
            res.send(results);
        })
        .catch((err, keys) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    getCustomerbyID:function(req,res)
    {
        CustomerModel.findById(req.params.CustomerID).then((results) => {
            res.send(results);
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    deleteExistingCustomer:function(req,res)
    {
        CustomerModel.findByIdAndDelete(req.params.CustomerID).then(() => {
            res.send("Your Customer has Deleted In DATABASE");
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    }
} 

