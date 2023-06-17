var ProductModel = require('../schemas/ProductSchema');

module.exports = {

    createProduct:function(req,res)
    {
        ProductModel.create(req.body).then(() => {
            res.send("Your Product is Saved in DATABASE");
        })
        .catch( (err) => {
            res.send("Something went wrong!!!!"+err);
        }) 
    }
    ,
    getProduct:function(req,res)
    {
        ProductModel.find().then((results) => {
            res.send(results);
        })
        .catch((err, keys) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    getProductbyID:function(req,res)
    {
        ProductModel.findById(req.params.ProductID).then((results) => {
            res.send(results);
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    updateProduct:function(req,res)
    {
        ProductModel.findByIdAndUpdate(req.params.ProductID, req.body).then(() => {
            res.send("Your Product has Updated in DATABASE");
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    deleteExistingProduct:function(req,res)
    {
        ProductModel.findByIdAndDelete(req.params.ProductID).then(() => {
            res.send("Your Product has Deleted In DATABASE");
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    }
} 
