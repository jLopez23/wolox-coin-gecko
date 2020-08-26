const jwt = require('jwt-simple');
const { key } = require('../../config').auth;

exports.encodeToken = user => {
    const payload = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName
    }
    return jwt.encode(payload, key); // falta la expiración del token
};

exports.decodeToken = token => jwt.decode(token, key);
