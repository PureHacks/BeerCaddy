'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Tabs Schema
 */
var TabsSchema = new Schema({
    tab: {
        type: Number,
        default: '',
        trim: true
    },
    firstname: {
        type: String,
        default: '',
        trim: true
    },
    lastname: {
        type: String,
        default: '',
        trim: true
    },
    email: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Validations
 */


/**
 * Statics
 */
TabsSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('tab', 'tab firstname lastname email').exec(cb);
};

mongoose.model('Tabs', TabsSchema);