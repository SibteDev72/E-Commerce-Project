const moongose = require('mongoose');

var Schema = moongose.Schema;

CartItemsSchema = new Schema(
    {
        ProductImageURL: {
            type: String,
            required: true,
            unique: false
        },
        ProductCode: {
            type: String,
            required: true,
            unique: true
        },
        Artical: {
            type: String,
            required: true,
            unique: false
        },
        ProductPrice: {
            type: Number,
            required: true,
            unique: false
        },
        ProductStock: {
            type: Number,
            required: true,
            unique: false
        },
        ProductQuantity: {
            type: Number,
            required: true,
            unique: false
        },
        ProductCategory: {
            type: String,
            required: true,
            unique: false
        },
        ProductSize: {
            type: String,
            required: true,
            unique: false
        }
    }
)

const CartItemsModel = moongose.model('CartItem', CartItemsSchema);
module.exports = CartItemsModel;
