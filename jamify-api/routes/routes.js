const express = require('express');
const apiRoutes = require('../controllers/index');

const router = express.Router();

router.get('/get-home-moods', apiRoutes.getHome);

router.get('/moods/:moodId', apiRoutes.getMood);

router.get('/get-song', apiRoutes.getSong);

router.post('/add-music', apiRoutes.postSong)

router.put('/new-user', apiRoutes.putUser);

module.exports = router;