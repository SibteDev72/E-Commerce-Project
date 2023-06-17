const express = require('express');
const MessageRouter = express.Router();

var MessageController = require('../controllers/MessageController',);

MessageRouter.post('/addMessage', MessageController.createMessage);
MessageRouter.get('/getMessage', MessageController.getMessage);
MessageRouter.get('/getMessagebyID/:MessageID', MessageController.getMessagebyID);
MessageRouter.delete('/deleteMessage/:MessageID', MessageController.deleteExistingMessage);

module.exports = MessageRouter;
