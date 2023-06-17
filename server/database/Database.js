const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/CRUD-Bin-Yousaf')
    .then(() => {
        console.log("Bin-Yousaf-Final-Project DATABASE IS CONNECTED SUCCESSFULLY");
    })
    .catch(() =>{
        console.log("Bin-Yousaf-Final-Project DATABASE IS NOT CONNECTED");
    })


                                                                                                                               