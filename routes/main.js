var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Avengers................................. Assemble');
});
module.exports = router;