const axios = require('axios');
const { User } = require('../models');
const { decodeToken } = require('../helpers/jwt');
const { UserCryptocurrency } = require('../models');
const { findOneUser } = require('../services/users');
const { coinsMarkets } = require('../helpers/axios');
const { formatCryptocurrency, formatUserCryptocurrency } = require('../helpers/format');

exports.getUserCryptocurrency = (userId, coinId ) => {
    return UserCryptocurrency.findOne({ where: {userId, coinId} })
    .catch(error => error);
};

exports.getCryptocurrency = headers => {
    return findOneUser(decodeToken(headers.accesstoken).userName)
        .then(user => {
            const params = { vs_currency: user.preferredCurrency };
            return coinsMarkets(params)
                .then(result => formatCryptocurrency(result.data))
                .catch(error => error);
        })
        .catch(error => error);
};

exports.createUserCryptocurrency = request => {
    return UserCryptocurrency.create(
        {
            userId: decodeToken(request.headers.accesstoken).id ,
            coinId: request.body.cryptoCurrencyId
        }
    )
        .then(result => result.dataValues)
        .catch(error => error);
    
};

exports.userCryptocurrency = headers => {
    return User.findByPk(decodeToken(headers.accesstoken).id,
        { include: { model: UserCryptocurrency } })
        .then(user => { 
           const params = { 
               vs_currency: user.preferredCurrency,
               ids: user.UserCryptocurrencies.map(element => element.coinId).join(','),
               per_page: 25
            };
           return coinsMarkets(params)
               .then(result => formatUserCryptocurrency(result.data))
               .catch(error => error);
        })
        .catch(error => error);
};
