var CategoryModel = require('../schemas/CategorySchema');

module.exports = {

    createCategory:function(req,res)
    {
        CategoryModel.create(req.body).then(() => {
            res.send("Your Category is Saved in DATABASE");
        })
        .catch( (err) => {
            res.send("Something went wrong!!!!"+err);
        }) 
    },
    getCategory:function(req,res)
    {
        CategoryModel.find().then((results) => {
            res.send(results);
        })
        .catch((err, keys) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    getCategorybyID:function(req,res)
    {
        CategoryModel.findById(req.params.CategoryID).then((results) => {
            res.send(results);
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    updateCategory:function(req,res)
    {
        CategoryModel.findByIdAndUpdate(req.params.CategoryID).then(() => {
            res.send("Your Category has Updated in DATABASE");
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    deleteExistingCategory:function(req,res)
    {
        CategoryModel.findByIdAndDelete(req.params.CategoryID).then(() => {
            res.send("Your Category has Deleted In DATABASE");
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    }
} 
