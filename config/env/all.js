'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    root: rootPath,
    port: process.env.PORT || 3000,
    db: process.env.MONGOHQ_URL,

    // The secret should be set to a non-guessable string that
    // is used to compute a session hash
    sessionSecret: 'b33rC4rtFr1d4y5',
    // The name of the MongoDB collection to store sessions in
    sessionCollection: 'sessions'
}