const { getCryptocurrency, createUserCryptocurrency, userCryptocurrency } = require('../services/cryptocurrency');

exports.getCryptocurrency = (req, res, next) => {
    getCryptocurrency(req.headers)
        .then(result => res.send(result))
        .catch(next);
};

exports.createUserCryptocurrency = (req, res, next) => {
    createUserCryptocurrency(req)
        .then(create => res.status(201).send({ create }))
        .catch(next);
};

exports.userCryptocurrency = (req, res, next) => {
    userCryptocurrency(req.headers)
        .then(userCryptocurrency => res.status(201).send({ userCryptocurrency }))
        .catch(next);
};