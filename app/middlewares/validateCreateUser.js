const { findOneUser } = require('../services/users');
const { validationResult } = require('express-validator');

exports.validateCreateUser = async (req, res, next) => {
    const errors = validationResult(req);
    const {firstName, lastName, userName, password, preferredCurrency } = req.body;
    const user = await findOneUser(userName);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!firstName || !lastName || !userName || !password || !preferredCurrency) {
        return res.status(422).json({ errors: 'No se enviaron todos los parametros necesarios (firstName-lastName-userName-password-preferredCurrency)' });
    }

    if (user) {
        return res.status(404).json({ errors: `El userName '${userName}' ya se encuentra registrado en nuestro sistema` });
    } else if (password.length < 8) {
        return res.status(422).json({ errors: 'La clave indicada debe ser igual o superior a 8 caracteres' });
    }

    return next();

};