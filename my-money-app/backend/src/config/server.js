const PORT = 3003;

const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./cors');
const queryParser = require('express-query-int')
const server = express();


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser())

server.listen(PORT, () =>
    console.log(`Server is runnig at http://localhost:${PORT}`)
);

module.exports = server