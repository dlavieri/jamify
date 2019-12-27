const User = require('../models/user');
const Mood = require('../models/mood');
const Song = require('../models/song');
const bcrypt = require('bcrypt');

exports.getHome = (req, res, next) => {
    Mood.findAll()
    .then(moods => {
        return res.json(moods);
    })
    .catch(err => console.log(err));
};

exports.getMood = (req, res, next) => {
    const moodId = req.params.moodId;

    Mood.findOne({where: {_id: moodId}, include: [{model: Song}]})
    .then(mood => {
        if (mood) {
            return res.status(200).json(mood);
        }
    })
    .catch(err => console.log(err));
}

exports.getSong = (req, res, next) => {
    const songId = req.params.songId;

    Song.findByPk(songId)
    .then(song => {
        res.status(202).json(song);
    })
    .catch(err => console.log(err));

    
};


exports.postSong = (req, res, next) => {
    const songName = req.body.songName;
    const mp3Path = req.body.mp3Path;
    const moodSelect = req.body.mood;

    console.log(req.body);

    Mood.findOne({where: {
        name: moodSelect
    }})
    .then(mood => {
        if (!mood) {
            console.log("creating new mood")
            return Mood.create({name: moodSelect});
        }
        return mood;
    })
    .then(mood => {
        console.log("creating new song")
        return mood.createSong({title: songName, mp3Path: mp3Path});
    })
    .then(() => {
        console.log("success");
        res.status(202);
    })
    .catch(err=> console.log(err))
    
};

exports.putUser = (req, res, next) => {
    const userEmail = req.body.email;
    const userPass = req.body.password;
    console.log("putting user")

    User.findByPk(userEmail)
    .then(user => {
        if (user) {
            console.log("user exists");
            res.status(303);
            throw new Error("Username already exists");
        } else {
            console.log("processing user add")
            return User.create({email: userEmail, password: userPass});
        }
    })
    .then(() => {
        console.log("put user successfully")
        res.status(200);
    })
    .catch(err => console.log(err));
};

exports.login = (req, res, next) => {
    const user = req.body.email;
    const pass = req.body.password;
}

exports.postNewPlaylist = (req, res, next) => {
    const reqUser = '';
    const playlistName = req.body.playlistName;

    User.findByPk(reqUser)
    .then(user => {
        if (!user) {
            res.status(400);
            throw new Error("Not signed in!");
        } else {
            return user.createPlaylist({name: playlistName})
        }
    })
    .catch(err => console.log(err));
};

exports.postAddSongToPlaylist = (req, res, next) => {
    const playlistName = req.body.playlist;
    const songAdd = req.body.song;


};

exports.postRemoveSongFromPlaylist = (req, res, next) => {

};

exports.postFollowArtist = (req, res, next) => {

};

exports.postUnfollowArtist = (req, res, next) => {

};