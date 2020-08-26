const moment = require('moment');

exports.formatDate = (date, format) => {
    return moment(date).format(format);
};

exports.todayDate = () => {
    return moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
};

exports.diffDate = date => {
    const diff = moment(new Date(),"DD/MM/YYYY HH:mm:ss")
        .diff(moment(date,"DD/MM/YYYY HH:mm:ss"));
    const duration = moment.duration(diff);

   return Math.floor(duration.asHours()) + moment.utc(diff).format(":mm:ss");
};