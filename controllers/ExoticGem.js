var ExoticGem = require('../models/exoticGem');

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


// List of all ExoticGems
exports.ExoticGem_list = async function (req, res) {
    try {
        exoticGem = await ExoticGem.find();
        res.render('exoticGem', { title: 'ExoticGem Search Results', results: exoticGem });
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
        exoticGem = await ExoticGem.find();
        res.render('exoticGem', { title: 'ExoticGem Search Results', results: exoticGem });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle ExoticGem create on POST.
exports.ExoticGem_create_post = async function (req, res) {
    console.log(req.body)
    let document = new exoticGem();
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
        result = await exoticGem.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.ExoticGem_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await ExoticGem.findById(req.params.id);
        if (!toUpdate) {
            return res.status(404).send({ error: "ExoticGem not found" });
        }
        // Update properties
        if (req.body.gem_name) toUpdate.gem_name = req.body.gem_name;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.rarity_level) toUpdate.rarity_level = req.body.rarity_level;
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};


// Handle ExoticGem delete on DELETE.
exports.ExoticGem_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await ExoticGem.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.ExoticGem_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    console.log(ExoticGem)
    try {
        result = await ExoticGem.findById(req.query.id)
        res.render('ExoticGemDetail',
            { title: 'ExoticGem Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for creating a ExoticGem.
// No body, no in path parameter, no query.
// Does not need to be async
exports.ExoticGem_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('ExoticGemCreate', { title: 'ExoticGem Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a ExoticGem.
// query provides the id
exports.ExoticGem_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await ExoticGem.findById(req.query.id)
        
        res.render('ExoticGemUpdate', { title: 'ExoticGem Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



// Handle a delete one view with id from query
exports.ExoticGem_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await ExoticGem.findById(req.query.id)
        res.render('ExoticGemDelete', {
            title: 'ExoticGem Delete', toShow:result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};










