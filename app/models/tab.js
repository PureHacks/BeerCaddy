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
// TabsSchema.statics.load = function(id, cb) {
//      this.findOne({
//         _id: id
//     }).exec(cb);
// };


mongoose.model('Tab', TabsSchema);


// /**
//  * Statics
//  */
// ArticleSchema.statics.load = function(id, cb) {
//     this.findOne({
//         _id: id
//     }).populate('user', 'name username').exec(cb);
// };

// mongoose.model('Article', ArticleSchema);