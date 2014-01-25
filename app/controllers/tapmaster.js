'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Tabs = mongoose.model('Tabs'),
    _ = require('lodash');


/**
 * Find tab by email
 */
exports.tab = function(req, res, next, id) {
    Tabs.load(id, function(err, tab) {
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
    var tab = new Tabs(req.body);
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
 * List of Tabs
 */
exports.all = function(req, res) {
    Tabs.find().sort('-created').populate('tab', 'tab firstname lastname email').exec(function(err, tabs) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tabs);
        }
    });
};