var express = require('express');

const ExoticGem_controlers= require('../controllers/ExoticGem');
var router = express.Router();
/* GET ExoticGems */

router.put('/', function(req, res) {
if(req.body.checkboxsale)toUpdate.sale = true;
else toUpdate.same = false;
})

router.get('/', ExoticGem_controlers.ExoticGem_update_put );
module.exports = router;

