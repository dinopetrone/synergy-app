define(function( require, exports, module ){

var backbone = require('backbone');
var Category = require('./models').Category;

var Categories =  backbone.Collection.extend({
    model: Category
});

exports.Categories = Categories;

});
