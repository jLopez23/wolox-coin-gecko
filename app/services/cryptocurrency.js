const axios = require('axios');
const { decodeToken } = require('../helpers/jwt')
const { findOneUser } = require('../services/users')
const { coinsMarkets } = require('../helpers/axios')
const { formatCryptocurrency } = require('../helpers/format');

exports.getCryptocurrency = headers => {
    return findOneUser(decodeToken(headers.accesstoken).userName)
        .then(user => {
            return coinsMarkets(user.preferredCurrency)
                .then(result => formatCryptocurrency(result.data))
                .catch(error => error);
        })
        .catch(error => error);

         
};
