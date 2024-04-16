const mongoose = require("mongoose");

const ExoticGemSchema = mongoose.Schema({
    gem_name: String,
    color: {
        type: String,
        minlength: 8,
        maxlenght: 20
    },
    rarity_level: {
        type: Number,
        min: 10,
        max: 80,
    }

}) 

module.exports = mongoose.model("exoticGem", ExoticGemSchema);
