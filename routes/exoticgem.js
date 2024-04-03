var express = require('express');
const ExoticGem_controlers= require('../controllers/ExoticGem');
var router = express.Router();
/* GET ExoticGems */
router.get('/', ExoticGem_controlers.ExoticGem_detail );
module.exports = router;

