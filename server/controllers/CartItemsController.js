var CartItemsModel = require('../schemas/CartItemsSchema');

module.exports = {

    createProduct:function(req,res)
    {
        CartItemsModel.create(req.body).then(() => {
            res.send("Your Product is Saved in DATABASE");
        })
        .catch( (err) => {
            res.send("Something went wrong!!!!"+err);
        }) 
    }
    ,
    getProduct:function(req,res)
    {
        CartItemsModel.find().then((results) => {
            res.send(results);
        })
        .catch((err, keys) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    getProductbyID:function(req,res)
    {
        CartItemsModel.findById(req.params.ProductID).then((results) => {
            res.send(results);
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    updateProduct:function(req,res)
    {
        CartItemsModel.findByIdAndUpdate(req.params.ProductID, req.body).then(() => {
            res.send("Your Product has Updated in DATABASE");
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    deleteExistingProduct:function(req,res)
    {
        CartItemsModel.findByIdAndDelete(req.params.ProductID).then(() => {
            res.send("Your Product has Deleted In DATABASE");
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    }
} 

