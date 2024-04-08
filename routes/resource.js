var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ExoticGem_controller = require('../controllers/ExoticGem');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// ExoticGem ROUTES ///
// POST request for creating a ExoticGem.
router.post('/ExoticGemCreate', ExoticGem_controller.ExoticGem_create_post);
// DELETE request to delete ExoticGem.
router.delete('/ExoticGemD/:id', ExoticGem_controller.ExoticGem_delete);
// PUT request to update ExoticGem.
router.put('/ExoticGemUp/:id', ExoticGem_controller.ExoticGem_update_put);
// GET request for one ExoticGem.
router.get('/ExoticGem/:id', ExoticGem_controller.ExoticGem_detail);
// GET request for list of all ExoticGem items.
router.get('/ExoticGem', ExoticGem_controller.ExoticGem_list);
module.exports = router;