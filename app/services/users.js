const { User } = require('../models');
const { encodeToken } = require('../helpers/jwt'); 
const { encryption } = require('../helpers/keyEncryption');

exports.findOneUser = userName => {
    return User.findOne({ where: {userName} })
        .catch(error => error);
};

exports.create = user => {
    user.password = encryption(user.password)
    return User.create(user)
        .then(result => {
            return result.dataValues;   
        })
        .catch(error => error);
};

exports.accessToken = user => {
    return encodeToken(user);
};