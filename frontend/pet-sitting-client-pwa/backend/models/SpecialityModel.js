const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
    name: { type:String, required:true }
});

const Service = mongoose.model('Special', ServicesSchema);

module.exports = Service;