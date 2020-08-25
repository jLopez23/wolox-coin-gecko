const { User } = require('../models');
const { encryption, validatePassword } = require('../helpers/keyEncryption');
const { encodeToken } = require('../helpers/jwt'); 

exports.create = user => {
    user.password = encryption(user.password)
    return User.create(user)
        .then(result => {
            return result.dataValues;   
        })
        .catch(error => error);
};

exports.authenticate = user => {
    const userName= user.userName;
    const password = user.password;
    return User.findOne({ where: {userName} })
        .then(result => {
            if(validatePassword(password, result.password)){
                return {status:"success", message: "user found!!!", data:{user: result, token:encodeToken(result)}};
            } else {
                return {status:"error", message: "Invalid email/password!!!", data:null};
            }            
        })
        .catch(error => error);
};