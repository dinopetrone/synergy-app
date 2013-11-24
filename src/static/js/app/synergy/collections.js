define(function( require, exports, module ){

var backbone = require('backbone');
var Category = require('./models').Category;
var Task = require('./models').Task;
require('backbone.localStorage');

var Categories =  backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('categories'),
    model: Category
});

var Tasks =  backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('categories'),
    model: Task
});

exports.Categories = Categories;
exports.Tasks = Tasks;

});
