'use strict';

// Articles routes use tabs controller
var tabs = require('../controllers/tabs');
var authorization = require('./middlewares/authorization');

// Article authorization helpers
// var hasAuthorization = function(req, res, next) {
//     if (req.article.user.id !== req.user.id) {
//         return res.send(401, 'User is not authorized');
//     }
//     next();
// };

module.exports = function(app) {

    app.get('/tabs', tabs.all);
    app.post('/tabs', authorization.requiresLogin, tabs.create);
    app.get('/tabs/:tabId', tabs.show);
  //  app.put('/tabs/:tabId', authorization.requiresLogin, hasAuthorization, tabs.update);

    // Finish with setting up the tabId param
    app.param('tabId', tabs.article);

};