var ExoticGem = require('../models/ExoticGem');
// List of all ExoticGems
exports.ExoticGem_list = function (req, res) {
    res.send('NOT IMPLEMENTED: ExoticGem list');
};
// for a specific ExoticGem.
exports.ExoticGem_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: ExoticGem detail: ' + req.params.id);
};
// Handle ExoticGem create on POST.
exports.ExoticGem_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: ExoticGem create POST');
};
// Handle ExoticGem delete from on DELETE.
exports.ExoticGem_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: ExoticGem delete DELETE ' + req.params.id);
};
// Handle ExoticGem update form on PUT.



// List of all ExoticGems
exports.ExoticGem_list = async function (req, res) {
    try {
        theExoticGems = await ExoticGem.find();
        res.send(theExoticGems);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.ExoticGem_view_all_Page = async function (req, res) {
    try {
        theExoticGems = await ExoticGem.find();
        res.render('ExoticGem', { title: 'ExoticGem Search Results', results: theExoticGems });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle ExoticGem create on POST.
exports.ExoticGem_create_post = async function (req, res) {
    console.log(req.body)
    let document = new ExoticGem();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"ExoticGem_type":"goat", "cost":12, "size":"large"}
    document.gem_name = req.body.gem_name;
    document.color = req.body.color;
    document.rarity_level = req.body.rarity_level;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.ExoticGem_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await ExoticGem.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.ExoticGem_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await ExoticGem.findById(req.params.id)
        // Do updates of properties
        if (req.body.gem_name)
            toUpdate.gem_name = req.body.gem_name;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.rarity_level) toUpdate.rarity_level = req.body.rarity_level;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};

