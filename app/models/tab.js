'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Tabs Schema
 */
var TabSchema = new Schema({
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
 * Statics
*/
TabSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Tab', TabSchema);