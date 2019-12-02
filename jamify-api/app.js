const express = require('express');

const db = require('./util/database');
const SongDb = require('./models/song');
const ArtistDb = require('./models/artist');
const AlbumDb = require('./models/album');
const PlaylistDb = require('./models/playlist');
const UserDb = require('./models/user');
const AlbumSongDb = require('./models/album-song');
const PlaylistSongDb = require('./models/playlist-song');

const app = express();

AlbumDb.belongsTo(ArtistDb, { constraints: true, onDelete: "CASCADE" });
SongDb.belongsTo(AlbumDb, { constraints: true, onDelete: "CASCADE", through: AlbumSongDb });
PlaylistDb.belongsTo(UserDb);
SongDb.belongsToMany(PlaylistDb, { through: PlaylistSongDb });


db.sync({force: true})
    .then(
        console.log('Success!')
    )
    .catch(err => console.log(err));

app.listen(8080);