const mongoose = require('mongoose');
mongoose.pluralize(null);

var Schema = mongoose.Schema;

ProductSchema = new Schema(
    {   
        ProductImageUrlArray: [{
            type: String,
            required: false,
        }],
        ProductName: {
            type: String,
            required: true,
            unique: true
        },
        ProductPrice: {
            type: Number,
            required: true,
            unique: false
        },
        ProductDescription: {
            type: String,
            required: true,
            unique: false
        },
        ProductCategory: {
            type: String,
            required: true,
            unique: false
        },
        ProductStockS: {
            type: Number,
            required: false,
            unique: false
        },
        ProductStockM: {
            type: Number,
            required: false,
            unique: false
        },
        ProductStockL: {
            type: Number,
            required: false,
            unique: false
        },
        ProductStockXL: {
            type: Number,
            required: false,
            unique: false
        },
        ProductSizes: [
            Schema.Types.String
        ]
    }
)

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;
