const Sequelize = require('sequelize');

const db = require('../util/database');

const SongDb = db.define('song', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    songid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    img: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    location: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = SongDb;