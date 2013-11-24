define(function (require, exports, module) {

var marionette = require('marionette');
var CategoriesCompositeView = require('./synergy/views/categories').CategoriesCompositeView;
var TasksCompositeView = require('./synergy/views/tasks').TasksCompositeView;
var InProgressCollectionView = require('./synergy/views/in-progress').InProgressCollectionView;
var CompletedCompositeView = require('./synergy/views/completed').CompletedCompositeView;

var AppController = marionette.Controller.extend({
    initialize : function(options){
        this.app = options.app;
        this.app.categories.show(new CategoriesCompositeView());
        this.app.tasks.show(new TasksCompositeView());
        this.app.inProgress.show(new InProgressCollectionView());
        this.app.completed.show(new CompletedCompositeView());
    },

});

exports.AppController = AppController;

});
