const http = require('http');
require('dotenv').config();
const app = require('./app');

const server = http.createServer();

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});