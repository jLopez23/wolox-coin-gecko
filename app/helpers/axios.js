const axios = require('axios');
const { endpointCoinsMarkets } = require('../../config').coingecko;

exports.coinsMarkets = param => {
    return axios.get(endpointCoinsMarkets, 
        {
            params: {
                vs_currency: param
            }
        }
    )
        .catch(error => error);
};