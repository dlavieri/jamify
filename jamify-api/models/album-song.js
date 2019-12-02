const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const AlbumSongDb = sequelize.define('albumSong', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    index: Sequelize.INTEGER
})

module.exports = AlbumSongDb;