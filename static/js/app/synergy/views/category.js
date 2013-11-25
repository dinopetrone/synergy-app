define(function (require, exports, module) {

var marionette = require('marionette');
var template = require('hbs!../templates/category');
var ListItem = require('./list-item').ListItem;

var CategoryItemView = ListItem.extend({
    template : template
});

exports.CategoryItemView = CategoryItemView;

});
