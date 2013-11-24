define(function (require, exports, module) {

var marionette = require('marionette');

var CategoryItemView = require('./category').CategoryItemView;
var template = require('hbs!../templates/categories');

var CategoriesCompositeView =  marionette.CompositeView.extend({
    itemView : CategoryItemView,
    itemViewContainer : '.list-group',
    template:template,
    ui : {

    },
    events : {

    },
    initialize : function(){

    },
    onRender: function(){

    },

});

exports.CategoriesCompositeView = CategoriesCompositeView;

});
