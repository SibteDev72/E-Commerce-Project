const mongoose = require('mongoose');
mongoose.pluralize(null);

var Schema = mongoose.Schema;

CategorySchema = new Schema(
    {
        CategoryImageURL: {
            type: String,
            required: true,
            unique: false
        },

        CategoryName: {
            type: String,
            required: true,
            unique: false
        }

    }
)
const CategoryModel = mongoose.model('Category', CategorySchema);
module.exports = CategoryModel;
