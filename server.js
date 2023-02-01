const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    routers = require('./routes/routes.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers);

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});