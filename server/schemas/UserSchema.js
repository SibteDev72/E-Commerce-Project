const mongoose = require('mongoose');
mongoose.pluralize(null);
const bcrypt = require('bcrypt');
const saltAround = 10;

var Schema = mongoose.Schema

UserInfoSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
            unique: false
        },

        Email: {
            type: String,
            required: true,
            unique: true
        },

        Password: {
            type: String,
            required: true,
            unique: true
        }
    }
)

UserInfoSchema.pre('save', function(next){
    this.Password = bcrypt.hashSync(this.Password, saltAround);
    next();
})

const UserInfoModel = mongoose.model('User', UserInfoSchema);
module.exports = UserInfoModel;

