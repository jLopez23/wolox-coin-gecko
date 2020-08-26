const { formatDate } = require('./moment');

exports.formatCryptocurrency = data => {
    return data.map(element => {
        let obj = [];
        obj = {
            Simbolo: element.symbol,
            Precio: element.current_price, // fata convertir a moneda del usuario
            Nombre: element.name,
            Imagen: element.image,
            fechaUltimaActualización: formatDate(element.last_updated, 'DD-MM-YYYY, h:mm:ss a')
        } 
        return obj;
    })
};