const express = require("express");
const MediaUploadRoute = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, callback) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'video/mp4' ||
        file.mimetype === 'audio/ogg' || file.mimetype === 'audio/mp3' || file.mimetype === 'audio/x-m4a' || 
        file.mimetype === 'application/octet-stream' || file.mimetype === 'application/pdf') {
        callback(null, true);
    } else {
        callback(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize:  1024 * 1024 * 32
    },
    fileFilter: fileFilter
});

const MediaInfoModel = require('../schemas/FileUploadSchema');
MediaUploadRoute.post("/postuploadInfo", upload.single('file'), (req, res, next) => {
    if(req.file.mimetype == "image/png" || req.file.mimetype=="image/jpeg" || req.file.mimetype=="image/jpg"){
    const MediaInfo = new MediaInfoModel({
        _id: new mongoose.Types.ObjectId(),
        title:req.body.title,
        name: req.file.filename,
        type:req.file.mimetype,
        path: req.file.path,
    });
    MediaInfo.save().then(result => {
       res.send(result);
    });
}

});
MediaUploadRoute.get('/getuploadInfo', (req, res, next) => {
    MediaInfoModel.find(function (request, response) {
        res.send(response);
    });
});

module.exports = MediaUploadRoute;