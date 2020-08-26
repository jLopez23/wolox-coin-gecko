const { getCryptocurrency } = require('../services/cryptocurrency');

exports.getCryptocurrency = (req, res, next) => {
    getCryptocurrency(req.headers)
        .then(result => res.status(200).send(result))
        .catch(next);
};