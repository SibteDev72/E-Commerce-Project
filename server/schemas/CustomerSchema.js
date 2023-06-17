const mongoose = require('mongoose');
mongoose.pluralize(null);

var Schema = mongoose.Schema

CustomerInfoSchema = new Schema(
    {
        OrderNo: {
            type: Number,
            required: true,
            unique: true
        },
        
        OrderDate: {
            type: String,
            required: true,
            unique: false
        },

        CartInfo: [{
            type: Object,
            required: true
        }],

        CartSubtotal: {
            type: Number,
            required: true,
        },

        FirstName: [{
            type: String,
            required: true,
            unique: false
        }],
        
        LastName: [{
            type: String,
            required: true,
            unique: false
        }],

        State: [{
            type: String,
            required: true,
            unique: false
        }],

        City: [{
            type: String,
            required: true,
            unique: false
        }],

        AddressArray: [{
            type: String,
            required: true,
            unique: false
        }],

        PostalNumber: [{
            type: Number,
            required: false,
            unique: false
        }],
        
        Email:{
            type: String,
            required: true,
            unique: false
        },
        
        ContactNumber:  [{
            type: Number,
            required: false,
            unique: false
        }],
        
        PaymentMethod: {
            type: String,
            required: true,
            unique: false
        },
        
        CredtitCardNum: {
            type: Number,
            required: false,
            unique: false
        },

        CredtitCardNumberExp: {
            type: String,
            required: false,
            unique: false
        },
        ShippingStatus: {
            type: Boolean,
            required: true
        }
    }
)

const CustomerInfoModel = mongoose.model('Customer', CustomerInfoSchema);
module.exports = CustomerInfoModel;
