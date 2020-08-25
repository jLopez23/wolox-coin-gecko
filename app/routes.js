const { create, authenticate } = require('./controllers/users')

exports.init = app => {
    app.post('/register', create);
    app.post('/authenticate', authenticate);
};