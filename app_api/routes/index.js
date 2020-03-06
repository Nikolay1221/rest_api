var express = require('express');
var router = express.Router();
var getMess = require('../controllers/main');
var postMess = require('../controllers/main')
    /* GET home page. */
router.get('/get', getMess.mess);
router.post('/post', postMess.messp);

module.exports = router;
