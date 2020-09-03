const dotenv = require('dotenv');
dotenv.config();

const config = {
    database: {
        development: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST
        },
        test: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST            
        }
    },
    auth: {
        key: process.env.SECRET_KEY
    },
    coingecko: {
        endpointCoinsMarkets: process.env.ENDPOINT_COIN_MARKETS
    },
    token: {
        expire: '0:00:30' // hours:minutes:seconds
    },
    test: {
        user: { // must exist in database
            userName: 'julian.lopez',
            password: '12345678'
        },
        coinId: { // must exist in coingecko
            cryptoCurrencyId: 'tether'
        }
    }
};

module.exports = config;