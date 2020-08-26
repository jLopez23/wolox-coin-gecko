const { findOneUser, create, accessToken} = require('../services/users');

exports.create = (req, res, next) => {
    create(req.body)
        .then(user => res.status(201).send({ user }))
        .catch(next);
};

exports.accessToken = (req, res, next) => {
    findOneUser(req.body.userName)
        .then(user => res.status(200).send({ accessToken: accessToken(user) }))
        .catch(next);
};