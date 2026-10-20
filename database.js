const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'storage/database.sqlite',
    logging: false,
});

module.exports = sequelize;