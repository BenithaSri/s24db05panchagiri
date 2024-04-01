var express = require('express');
const ExoticGem_controlers= require('../controllers/ExoticGem');
var router = express.Router();
/* GET ExoticGems */
router.get('/', ExoticGem_controlers.ExoticGem_view_all_Page );
module.exports = router;

