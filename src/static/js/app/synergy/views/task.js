define(function (require, exports, module) {

var marionette = require('marionette');
var DragAndDropCollectionView = require('built/ui/views/collection/drag-and-drop').DragAndDropCollectionView;
var template = require('hbs!../templates/task');

var TaskItemView = marionette.ItemView.extend({
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

exports.TaskItemView = TaskItemView;

});
