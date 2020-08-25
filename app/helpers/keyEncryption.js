const bcrypt = require('bcryptjs');

exports.encryption = (password, salt = 8) => bcrypt.hashSync(password, bcrypt.genSaltSync(salt));

exports.validatePassword = (password, hash) => bcrypt.compareSync(password, hash);