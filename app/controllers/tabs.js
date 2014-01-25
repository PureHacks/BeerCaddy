'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Tab = mongoose.model('Tab'),
    _ = require('lodash');


/**
 * Find tab by email
 */
exports.tab = function(req, res, next, id) {
    Tab.load(id, function(err, tab) {
        if (err) return next(err);
        if (!tab) return next(new Error('Failed to load tab ' + id));
        req.tab = tab;
        next();
    });
};

/**
 * Create a tab
 */
exports.create = function(req, res) {
    var tab = new Tab(req.body);
    tab.email = req.email;

    tab.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tab);
        }
    });
};

/**
 * Update a tab
 */
exports.update = function(req, res) {
    var tab = req.tab;

    tab = _.extend(tab, req.body);

    tab.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tab);
        }
    });
};

/**
 * Delete a tab
 */
exports.destroy = function(req, res) {
    var tab = req.tab;

    tab.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tab);
        }
    });
};

/**
 * Show a tab
 */
exports.show = function(req, res) {
    res.jsonp(req.tab);
};

/**
 * List of Tab
 */
exports.all = function(req, res) {
    Tab.find().sort('-created').populate('tab', 'tab firstname lastname email').exec(function(err, tabs) {
        if (err) {
            console.log(err);
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tabs);
        }
    });
};