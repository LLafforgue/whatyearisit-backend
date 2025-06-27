var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function(req, res) {
  res.json({'result': true, 'nowYear': new Date().getUTCFullYear() });
});

module.exports = router;
