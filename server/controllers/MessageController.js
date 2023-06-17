var MessageModel = require('../schemas/MessageSchema');

module.exports = {

    createMessage:function(req,res)
    {
        MessageModel.create(req.body).then(() => {
            res.send("Your Message is Saved in DATABASE");
        })
        .catch( (err) => {
            res.send("Something went wrong!!!!"+err);
        }) 
    }
    ,
    getMessage:function(req,res)
    {
        MessageModel.find().then((results) => {
            res.send(results);
        })
        .catch((err, keys) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    getMessagebyID:function(req,res)
    {
        MessageModel.findById(req.params.MessageID).then((results) => {
            res.send(results);
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    },
    deleteExistingMessage:function(req,res)
    {
        MessageModel.findByIdAndDelete(req.params.MessageID).then(() => {
            res.send("Your Message has Deleted In DATABASE");
        })
        .catch((err) => {
            res.send("Something went wrong!!!"+err);
        })
    }
} 

