define(function (require, exports, module) {

var marionette = require('marionette');
var template = require('hbs!../templates/category');
var ListItem = require('./list-item').ListItem;

var CategoryItemView = ListItem.extend({
    template : template,
    events : _.extend({

    }, ListItem.prototype.events),
    showSelected : function(bool){
        if(!bool){
            this.$el.removeClass('active');
        }else{
            this.$el.addClass('active');
        }
    },

});

exports.CategoryItemView = CategoryItemView;

});
