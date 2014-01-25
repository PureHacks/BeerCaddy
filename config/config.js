'use strict';

// Utilize Lo-Dash utility library
var _ = require('lodash'); // Utility library

// Extend the base configuration in all.js with environment
// specific configuration
module.exports = _.extend(
    require('./env/all.js'),
    require('./env/' + process.env.NODE_ENV + '.js') || {}
); // same as _.assign -> merges properties from NODE_ENV to all.js overwriting if necessary