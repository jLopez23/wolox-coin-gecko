const { decodeToken } = require('../helpers/jwt');
const { coinsMarkets } = require('../helpers/axios');
const { findOneUser } = require('../services/users');
const { getUserCryptocurrency } = require('../services/cryptocurrency');
const { validationResult } = require('express-validator');

exports.validateUserCryptocurrency = async (req, res, next) => {
    const errors = validationResult(req);
    let cryptoCurrency = [];
    const { cryptoCurrencyId } = req.body;
    const user = await findOneUser(decodeToken(req.headers.accesstoken).userName);
    const userCryptocurrency = await getUserCryptocurrency(user.id, cryptoCurrencyId);
    const params = {
        vs_currency: user.preferredCurrency,
        ids: cryptoCurrencyId
    }
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    if (!cryptoCurrencyId) {
        return res.status(422).json(
            { 
                errors: 'No se enviaron todos los parametros necesarios (cryptoCurrencyId)' 
            }
        );
    } 
    
    cryptoCurrency = await coinsMarkets(params)
        .then(result => result.data.length);
        
    if (cryptoCurrency == 0) {
        return res.status(404).json({ errors: `La criptomoneda '${cryptoCurrencyId}' no existe` })
    } else if (userCryptocurrency) {
        return res.status(404).json(
            { 
                errors: `La criptomoneda '${cryptoCurrencyId} ya se encuentra registrada para su usuario` 
            }
        );
    }

    return next();

};