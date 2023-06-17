const mongoose = require('mongoose');
mongoose.pluralize(null);

var Schema = mongoose.Schema;

UploadMediaSchema = new Schema(
    {
        title: {
            type: String
        },
        name: {
            type: String
        },
        type: {
            type: String
        },
        path:{
            type: String
        } 
    }
)

const MediaInfoModel = mongoose.model('MediaInfo', UploadMediaSchema);
module.exports = MediaInfoModel
