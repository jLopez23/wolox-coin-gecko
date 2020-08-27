const { encodeToken } = require('../helpers/jwt');
const { findOneUser, create } = require('../services/users');

exports.create = (req, res, next) => {
    create(req.body)
        .then(user => res.status(201).send({ user }))
        .catch(next);
};

exports.accessToken = (req, res, next) => {
    findOneUser(req.body.userName)
        .then(user => res.send({ accessToken: encodeToken(user) }))
        .catch(next);
};