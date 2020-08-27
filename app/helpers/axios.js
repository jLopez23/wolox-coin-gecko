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

exports.coinsPrices = params => {
    return axios.get(endpointCoinsMarkets, 
        {
            params
        }
    )
        .then(result => result.data[0].current_price)
        .catch(error => error);
};