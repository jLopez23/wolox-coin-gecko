const { create, authenticate} = require('../services/users')

exports.create = (req, res, next) => {
    create(req.body)
        .then(user => res.status(201).send({ user }))
        .catch(next);
};

exports.authenticate = (req, res, next) => {
    authenticate(req.body)
        .then(response => res.send(response))
        .catch(next);
};