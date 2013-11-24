define(function( require, exports, module ){

var backbone = require('backbone');
var Category = require('./models').Category;
require('backbone.localStorage');

var Categories =  backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('categories'),
    model: Category
});

exports.Categories = Categories;

});
