var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HosWebDown Website downloader - Make HTML websites offline.' });
});

module.exports = router;
