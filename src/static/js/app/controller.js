define(function (require, exports, module) {

var marionette = require('marionette');
var CategoriesCompositeView = require('./synergy/views/categories').CategoriesCompositeView;
var TasksCompositeView = require('./synergy/views/tasks').TasksCompositeView;
var InProgressCompositeView = require('./synergy/views/in-progress').InProgressCompositeView;
var CompletedCompositeView = require('./synergy/views/completed').CompletedCompositeView;

var AppController = marionette.Controller.extend({
    initialize : function(options){
        this.app = options.app;

        this.categoriesCompositeView = new CategoriesCompositeView();
        this.listenTo(this.categoriesCompositeView, 'itemview:focused', this.onCategorySwitch);

        this.app.categories.show(this.categoriesCompositeView);

        this.app.inProgress.show(new InProgressCompositeView());
        this.app.completed.show(new CompletedCompositeView());
    },
    onCategorySwitch: function(view){
        var collection = view.model.tasks;
        this.app.tasks.show(new TasksCompositeView({collection:collection}));
    },

});

exports.AppController = AppController;

});
