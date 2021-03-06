'use strict';

var express = require('express');
var router = express.Router();

var home = require('./home/routes');
var mentions = require('./mentions/routes');

router.use('/', home);

module.exports = router;
