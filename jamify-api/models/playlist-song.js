const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const PlaylistSongDb = sequelize.define('playlistSong', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }
});

module.exports = PlaylistSongDb;