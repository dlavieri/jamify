const express = require('express');
const apiRoutes = require('../controllers/index');

const router = express.Router();

router.get('./get-song', apiRoutes.getSong);

module.exports = router;