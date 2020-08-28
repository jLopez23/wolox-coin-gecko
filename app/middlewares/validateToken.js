const { expire } = require('../../config').token;
const { diffDate } = require('../helpers/moment');
const { decodeToken } = require('../helpers/jwt');
const { validationResult } = require('express-validator');

exports.validateToken = async (req, res, next) => {
    const { accesstoken } = req.headers;
    const errors = validationResult(req);
         
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!accesstoken) {
        return res.status(422).json({ errors: 'No se envio el parametro necesario (accesstoken)' });
    }
    
    try {
        if (diffDate(decodeToken(accesstoken).creationDate) > expire) 
            return res.status(403).json({ errors: 'El accessToken enviado ya esta vencido' });
    } catch (error) {
        return res.status(403).json({ errors: 'El accessToken enviado no es valido' });
    }

    return next();

};