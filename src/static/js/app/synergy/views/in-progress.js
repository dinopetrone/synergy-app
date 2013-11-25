define(function (require, exports, module) {

var DragAndDropCompositeView = require('built/ui/views/composite/drag-and-drop').DragAndDropCompositeView;
var TaskItemView = require('./task').TaskItemView;
var Tasks = require('../collections').Tasks;
var template = require('hbs!../templates/in-progress');

var InProgressCompositeView =  DragAndDropCompositeView.extend({
    tagName:'ul',
    className:'list-group',
    template: template,
    itemViewContainer : '.list-group',
    itemView : TaskItemView,
    ui : {

    },
    events : {

    },
    initialize : function(){
        this.collection = new Tasks();
        DragAndDropCompositeView.prototype.initialize.apply(this, arguments);
    },
    renderPlaceholderForData: function(data){
        return $('<a class="list-group-item"></a>');
    }
});

exports.InProgressCompositeView = InProgressCompositeView;

});
