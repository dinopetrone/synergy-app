define(function( require, exports, module ){

var backbone = require('backbone');
var Task = require('../models/task').Task;
require('backbone.localStorage');

var Tasks =  backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('categories'),
    model: Task
});

exports.Tasks = Tasks;

});
