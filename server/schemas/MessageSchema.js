const mongoose = require('mongoose');
mongoose.pluralize(null);

var Schema = mongoose.Schema

MessageSchema = new Schema(
    {
        MessageDate:{
            type: String,
            required: true
        },
        Name:{
            type: String,
            required: true
        },
        Email:{
            type: String,
            required: true
        },
        PHNum: {
            type: Number,
            required: true
        },
        Message: {
            type: String,
            required: true
        }
    }
)

const MessageModel = mongoose.model('Message', MessageSchema);
module.exports = MessageModel;
