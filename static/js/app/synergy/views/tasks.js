define(function (require, exports, module) {

var marionette = require('marionette');
var DragAndDropCompositeView = require('built/ui/views/composite/drag-and-drop').DragAndDropCompositeView;
var TaskItemView = require('./task').TaskItemView;
var Tasks = require('app/synergy/collections').Tasks;
var template = require('hbs!../templates/tasks');


TasksCompositeView = DragAndDropCompositeView.extend({
    itemView : TaskItemView,
    itemViewContainer : '.list-group',
    template:template,
    ui : {
        add: '.add'
    },
    events : {
        'click .add': 'onAddClick'
    },

    initialize: function(){
        DragAndDropCompositeView.prototype.initialize.apply(this,arguments);
    },

    onAddClick: function(e){
        this.collection.add({});
        var model = this.collection.at(this.collection.length-1);
        var view = this.children.findByModel(model);
        view.trigger('focused');
        view.highlightForEdit();
    },

    getDragImage: function(){
        return false;
    },

    renderPlaceholderForData: function(data){
        return $('<a class="list-group-item"></a>');
    }
});



exports.TasksCompositeView = TasksCompositeView;

});
