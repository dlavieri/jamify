const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const UserDb = sequelize.define('artist', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
});


module.exports = UserDb;