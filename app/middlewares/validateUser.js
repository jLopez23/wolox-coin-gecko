const { validationResult } = require('express-validator');
const { validatePassword } = require('../helpers/keyEncryption');
const { findOneUser } = require('../services/users');

exports.validateUser = async (req, res, next) => {
    const errors = validationResult(req);
    const { userName, password } = req.body;
    const user = await findOneUser(userName);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!userName || !password) {
        return res.status(422).json({ errors: `No se enviaron todos los parametros necesarios (userName-password)` });
      }

    if (!user) {
        return res.status(404).json({ errors: `No se encontró el userName '${userName}' registrado en nuestro sistema` });
    } else if (!validatePassword(password, user.password)) {
        return res.status(401).json({ errors: `La clave del userName '${userName}' es incorrecta` });
    }

    return next();

};