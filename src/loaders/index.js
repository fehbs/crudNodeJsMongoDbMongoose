const startDB = require('./mongodb.js');

class Loaders {
  start() {
    startDB();
  }
}

module.exports = new Loaders();