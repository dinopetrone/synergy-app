define(function (require, exports, module) {

var DragAndDropCollectionView = require('built/ui/views/collection/drag-and-drop').DragAndDropCollectionView;
var TaskItemView = require('./task').TaskItemView;

var InProgressCollectionView =  DragAndDropCollectionView.extend({
    tagName:'ul',
    className:'list-group',
    itemView : TaskItemView,
    ui : {

    },
    events : {

    },
    initialize : function(){

    }
});

exports.InProgressCollectionView = InProgressCollectionView;

});
