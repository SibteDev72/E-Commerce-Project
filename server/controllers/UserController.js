var UserInfoModel = require('../schemas/UserSchema')
const bcrypt = require('bcrypt');
const jsonToken = require('jsonwebtoken');

module.exports = {
    createUser:function(req,res)
    {
        UserInfoModel.create(req.body).then(() => {
            res.send("User Created in Database");
        })
        .catch( (err) => {
            res.send("Something went wrong!!!!"+err);
        }) 
    },
    authentication:function(req, res, next){
        UserInfoModel.findOne({Email: req.body.Email}, function(err, userInfo){
            if(err){
                next(err);
            }
            else{
                if(bcrypt.compareSync(req.body.Password, userInfo.Password)){
                    const token = jsonToken.sign({id:userInfo._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                    res.json({userName: userInfo.Name, UserEmail: userInfo.Email, token: token});
                }
            }
        })
    },
} 
