const { create, accessToken } = require('./controllers/users');
const { validateUser } = require('./middlewares/validateUser');
const { validateToken } = require('./middlewares/validateToken');
const { getCryptocurrency } = require('./controllers/cryptocurrency');
const { validateCreateUser } = require('./middlewares/validateCreateUser');

exports.init = app => {
    // route user
    app.post('/register', validateCreateUser, create);
    app.post('/access-token', validateUser, accessToken);

    // route cryptocurrency
    app.get('/cryptocurrency', validateToken, getCryptocurrency);
};