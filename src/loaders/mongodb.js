const mongoose = require('mongoose');

async function startDB() {

    await mongoose.connect('mongodb+srv://user:<password>@cluster0.axdpgup.mongodb.net/test');
    
}

module.exports = startDB;
