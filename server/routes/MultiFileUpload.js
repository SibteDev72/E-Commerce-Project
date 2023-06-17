const express = require('express');
const MultiFileUploads =  express.Router();
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

MultiFileUploads.post('/uploadMultiImages', upload.array('images'), (req, res) => {
    const filePaths = req.files.map((file) => file.path);
    res.json({ paths: filePaths });
});

module.exports = MultiFileUploads;