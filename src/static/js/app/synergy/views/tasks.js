define(function (require, exports, module) {

var marionette = require('marionette');

var TaskItemView = require('./task').TaskItemView;
var Tasks = require('app/synergy/collections').Tasks;
var template = require('hbs!../templates/tasks');

var TasksCompositeView =  marionette.CompositeView.extend({
    itemView : TaskItemView,
    itemViewContainer : '.list-group',
    template:template,
    ui : {
        add: '.add'
    },
    events : {
        'click .add': 'onAddClick'
    },

    onAddClick: function(e){
        this.collection.add({});
        var model = this.collection.at(this.collection.length-1);
        var view = this.children.findByModel(model);
        view.trigger('focused');
        view.highlightForEdit();
    }


});

exports.TasksCompositeView = TasksCompositeView;

});
