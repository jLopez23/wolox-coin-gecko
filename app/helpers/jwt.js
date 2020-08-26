const jwt = require('jwt-simple');
const { todayDate } = require('./moment')
const { key } = require('../../config').auth;

exports.encodeToken = user => {
    const payload = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        creationDate: todayDate()
    }
    return jwt.encode(payload, key);
};

exports.decodeToken = token => jwt.decode(token, key);
