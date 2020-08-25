const { create, accessToken } = require('./controllers/users');
const { validateUser } = require('./middlewares/validateUser');
const { validateCreateUser } = require('./middlewares/validateCreateUser');

exports.init = app => {
    // route user
    app.post('/register', validateCreateUser, create);
    app.post('/access-token', validateUser, accessToken);

    // route Cryptocurrency
    app.get('cryptocurrency');
};