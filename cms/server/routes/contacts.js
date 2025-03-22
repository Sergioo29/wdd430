var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Contacts route is working!" });
});

module.exports = router;
