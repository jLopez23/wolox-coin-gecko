const axios = require('axios');
const { endpointCoinsMarkets } = require('../../config').coingecko;

exports.coinsMarkets = params => {
    return axios.get(endpointCoinsMarkets, 
        {
            params
        }
    )
        .catch(error => error);
};