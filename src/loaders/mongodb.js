const mongoose = require('mongoose');

async function startDB() {

    await mongoose.connect('mongodb+srv://draculajs:dracula@cluster0.axdpgup.mongodb.net/test');
    
}

module.exports = startDB;