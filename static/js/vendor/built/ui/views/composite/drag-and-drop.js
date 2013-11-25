define(function (require, exports, module) {
var DragAndDropCollectionView = require('built/ui/views/collection/drag-and-drop').DragAndDropCollectionView;
var marionette = require('marionette');
var DragAndDropCompositeView = marionette.CompositeView.extend({
    initialize: function(){
        DragAndDropCollectionView.prototype.initialize.apply(this, arguments);
    },
    onShow: function(){
        DragAndDropCollectionView.prototype.onShow.apply(this, arguments);
    },
    onClose: function(){
        DragAndDropCollectionView.prototype.onClose.apply(this, arguments);
    },
    getViewForEl: function(){
        return DragAndDropCollectionView.prototype.getViewForEl.apply(this, arguments);
    },
    _onRender: function(){
        DragAndDropCollectionView.prototype._onRender.apply(this, arguments);
    },
    getDragImage: function(){
        return DragAndDropCollectionView.prototype.getDragImage.apply(this, arguments);
    },
    renderPlaceholderForData: function(){
        return DragAndDropCollectionView.prototype.renderPlaceholderForData.apply(this, arguments);
    },
    getViewForId: function(){
        return DragAndDropCollectionView.prototype.getViewForId.apply(this, arguments);
    },
    getDragDataForElement: function(){
        return DragAndDropCollectionView.prototype.getDragDataForElement.apply(this, arguments);
    },
    serializeModel: function(){
        return DragAndDropCollectionView.prototype.serializeModel.apply(this, arguments);
    },
    deserializeModel: function(){
        return DragAndDropCollectionView.prototype.deserializeModel.apply(this, arguments);
    },
    dropResponderPerformDragOperation: function(){
        DragAndDropCollectionView.prototype.dropResponderPerformDragOperation.apply(this, arguments);
    },
    draggingEndedRestoreElementAtPosition: function(){
        DragAndDropCollectionView.prototype.draggingEndedRestoreElementAtPosition.apply(this, arguments);
    },
    appendHtml: function(){
        DragAndDropCollectionView.prototype.appendHtml.apply(this, arguments);
    },

});

exports.DragAndDropCompositeView = DragAndDropCompositeView;

});
