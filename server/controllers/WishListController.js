var WishListModel = require('../schemas/WishListSchema');

module.exports = {

    createProduct:function(req,res)
    {
        WishListModel.create(req.body).then(() => {
            res.send("Your Product is Saved in DATABASE");
        })
        .catch( (err) => {
            res.send("Something went wrong!!!!"+err);
        }) 
    }
    ,
    getProduct:function(req,res)
    {
        WishListModel.find().then((results) => {
            res.send(results);
        })
        .catch((err, keys) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    deleteExistingProduct:function(req,res)
    {
        WishListModel.findByIdAndDelete(req.params.ProductID).then(() => {
            res.send("Your Product has Deleted In DATABASE");
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    }
} 
