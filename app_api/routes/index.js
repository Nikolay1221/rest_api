var express = require('express');
var router = express.Router();

var getMess = require('../controllers/main');
var postMess = require('../controllers/main');

var getGps = require('../controllers/main');
var postGps = require('../controllers/main');

var getError = require('../controllers/main');
var postError = require('../controllers/main');
    /* GET home page. */
router.get('/get_termux_battery_status', getMess.mess);
router.post('/post_termux_battery_status', postMess.messp);

router.get('/get_termux-location', getGps.getGpsfunc);
router.post('/post_termux-location', postGps.postGpsfunc);

router.get('/get_error', getError.getErrorfunc);
router.post('/post_error', postError.postErrorfunc);



module.exports = router;
