const app = require('./app');
const Loaders = require('./loaders/index');

Loaders.start();

app.listen(9999, () => console.log('Server is runing at PORT => http://localhost:9999'));