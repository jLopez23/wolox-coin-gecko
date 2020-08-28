const { create, accessToken } = require('./controllers/users');
const { validateUser } = require('./middlewares/validateUser');
const { validateToken } = require('./middlewares/validateToken');
const { validateCreateUser } = require('./middlewares/validateCreateUser');
const { validateUserCryptocurrency } = require('./middlewares/validateUserCryptocurrency')
const { getCryptocurrency, createUserCryptocurrency, userCryptocurrency } = require('./controllers/cryptocurrency');

exports.init = app => {
    // route user
    app.post('/register', validateCreateUser, create);
    app.post('/access-token', validateUser, accessToken);

    // route cryptocurrency
    app.get('/cryptocurrency', validateToken, getCryptocurrency);
    app.post('/create-user-cryptocurrency', [validateToken, validateUserCryptocurrency], createUserCryptocurrency);
    app.get('/user-cryptocurrency', validateToken, userCryptocurrency);
};