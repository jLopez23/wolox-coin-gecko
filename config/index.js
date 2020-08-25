const dotenv = require('dotenv');
dotenv.config();

const config = {
    auth: {
        key: process.env.SECRET_KEY
    }
};

module.exports = config;