var express = require('express');
var passport = require('passport');
var ExoticGem_controler = require('../controllers/ExoticGem')
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}


/* GET ExoticGems */
router.get('/', ExoticGem_controler.ExoticGem_view_all_Page);

router.get('/exoticGem/:id', ExoticGem_controler.ExoticGem_detail);

/* GET detail ExoticGem page */
router.get('/detail', ExoticGem_controler.ExoticGem_view_one_Page);

/* GET create ExoticGem page */
router.get('/create',secured, ExoticGem_controler.ExoticGem_create_Page);

/* GET update ExoticGem page */
router.get('/update', secured, ExoticGem_controler.ExoticGem_update_Page);


/* GET delete ExoticGem page */
router.get('/delete', secured, ExoticGem_controler.ExoticGem_delete_Page);

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});


module.exports = router;