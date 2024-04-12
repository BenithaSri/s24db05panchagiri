const mongoose = require("mongoose")
const ExoticGemSchema = mongoose.Schema({
    gem_name: String,
    color: String,
    rarity_level: Number
})
module.exports = mongoose.model("exoticGem",ExoticGemSchema)
