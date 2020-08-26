const dotenv = require('dotenv');
dotenv.config();

const config = {
    auth: {
        key: process.env.SECRET_KEY
    },
    coingecko: {
        endpointCoinsMarkets: process.env.ENDPOINT_COIN_MARKETS
    }
};

module.exports = config;