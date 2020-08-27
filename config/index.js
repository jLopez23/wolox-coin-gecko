const dotenv = require('dotenv');
dotenv.config();

const config = {
    auth: {
        key: process.env.SECRET_KEY
    },
    coingecko: {
        endpointCoinsMarkets: process.env.ENDPOINT_COIN_MARKETS
    },
    token: {
        expire: '12:00:30' // hours:minutes:seconds
    }
};

module.exports = config;