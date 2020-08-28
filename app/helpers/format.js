const { formatDate } = require('./moment');
const { coinsPrices  } = require('./axios');

exports.formatCryptocurrency = data => {
    return data.map(element => {
        return {
            Id: element.id,
            Simbolo: element.symbol,
            Precio: element.current_price,
            Nombre: element.name,
            Imagen: element.image,
            FechaUltimaActualizacion: formatDate(element.last_updated, 'DD-MM-YYYY, h:mm:ss a')
        } 
    })
};

exports.formatUserCryptocurrency = data => {

    const promises = data.map(async (element) => {
        return {
            Id: element.id,
            Simbolo: element.symbol,
            PrecioPesosArgentinos: await coinsPrices({vs_currency: 'ARS', ids: element.id }),
            PrecioDolares: await coinsPrices({vs_currency: 'USD', ids: element.id }),
            PecioEuros: await coinsPrices({vs_currency: 'EUR', ids: element.id }),
            Nombre: element.name,
            Imagen: element.image,
            FechaUltimaActualizacion: formatDate(element.last_updated, 'DD-MM-YYYY, h:mm:ss a')
        }
    });

    return Promise.all(promises);
};