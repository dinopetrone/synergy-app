define(function (require, exports, module) {

var marionette = require('marionette');

var TaskItemView = require('./task').TaskItemView;
var template = require('hbs!../templates/tasks');

var TasksCompositeView =  marionette.CompositeView.extend({
    itemView : TaskItemView,
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

exports.TasksCompositeView = TasksCompositeView;

});
