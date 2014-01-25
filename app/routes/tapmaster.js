'use strict';

// Tapmaster routes use tapmaster controller
var tapmaster = require('../controllers/tapmaster');
var authorization = require('./middlewares/authorization');

// Tapmaster authorization helper
var hasAuthorization = function(req, res, next) {
    if (req.tapmaster.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/tapmaster', authorization.requiresLogin, tapmaster.all);

    // Finish with setting up the articleId param
    app.param('tabId', tapmaster.tab);

};