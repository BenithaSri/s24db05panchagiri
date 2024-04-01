const mongoose = require("mongoose")
const exoticGemSchema = mongoose.Schema({
    gem_name: String,
    color: String,
    rarity_level: Number
})
module.exports = mongoose.model("exoticGem",exoticGemSchema)