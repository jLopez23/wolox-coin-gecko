const { factory } = require('factory-girl');
const { User } = require('../../app/models');

const first = factory.chance('first');
const last = factory.chance('last');

factory.define('user', User, () => ({
    firstName: first,
    lastName: last,
    userName: '',
    password: factory.chance('string', { length: 8, alpha: true, numeric: true }),
    preferredCurrency: 'ARS'
}));

factory.define('cryptoCurrency', User, () => ({
    id: factory.chance('integer', { min: 1, max: 9 }),
    firstName: first,
    lastName: last,
    userName: first
}));

module.exports = { factory };