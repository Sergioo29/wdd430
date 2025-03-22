var express = require('express');
var path = require('path'); // Import path module
var router = express.Router();

// Serve the Angular app
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../dist/cms/index.html'));
});

module.exports = router;
