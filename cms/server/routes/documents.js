var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Documents route is working!" });
});

module.exports = router;
