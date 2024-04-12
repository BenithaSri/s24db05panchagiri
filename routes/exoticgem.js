var express = require('express');

const ExoticGem_controlers= require('../controllers/ExoticGem');
var router = express.Router();

// GET request for list of all ExoticGem items.
 router.get('/', ExoticGem_controlers.ExoticGem_list);

router.put('/', function(req, res) {
if(req.body.checkboxsale)toUpdate.sale = true;
else toUpdate.same = false;
})

// Delete
//router.get('/', ExoticGem_controlers.ExoticGem_delete );

/* GET detail ExoticGem page */
router.get('/detail', ExoticGem_controlers.ExoticGem_view_one_Page);

/* GET create ExoticGem page */
router.get('/create', ExoticGem_controlers.ExoticGem_create_Page);

/* GET create update page */
router.get('/update', ExoticGem_controlers.ExoticGem_update_Page);

/* GET delete ExoticGem page */
router.get('/delete', ExoticGem_controlers.ExoticGem_delete_Page);



module.exports = router;
