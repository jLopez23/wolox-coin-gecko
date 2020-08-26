const { formatDate } = require('./moment');

exports.formatCryptocurrency = data => {
    return data.map(element => {
        let obj = [];
        obj = {
            Simbolo: element.symbol,
            Precio: element.current_price,
            Nombre: element.name,
            Imagen: element.image,
            fechaUltimaActualización: formatDate(element.last_updated, 'DD-MM-YYYY, h:mm:ss a')
        } 
        return obj;
    })
};