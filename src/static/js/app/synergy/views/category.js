define(function (require, exports, module) {

var marionette = require('marionette');
var template = require('hbs!../templates/category');

var CategoryItemView = marionette.ItemView.extend({
    tagName: 'li',
    className: 'list-group-item',
    template : template,
    ui : {

    },
    events : {

    },
    initialize : function(){

    }
});

exports.CategoryItemView = CategoryItemView;

});
