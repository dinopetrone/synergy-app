define(function (require, exports, module) {

var marionette = require('marionette');

var CategoryItemView = require('./category').CategoryItemView;
var template         = require('hbs!../templates/categories');
var Categories       = require('app/synergy/collections/categories').Categories;
var Tasks            = require('app/synergy/collections/tasks').Tasks;

var CategoriesCompositeView =  marionette.CompositeView.extend({
    itemView : CategoryItemView,
    itemViewContainer : '.list-group',
    template:template,
    ui : {
        add: '.add'
    },
    events : {
        'click .add': 'onAddClick'
    },
    initialize : function(){
        this.collection = new Categories();
        this.on('itemview:focused', this.onItemViewClicked);
        this.collection.fetch();
    },
    onAddClick: function(e){
        // this.collection.create({tasks: new Tasks()});
        this.collection.create({});
        var model = this.collection.at(this.collection.length-1);
        var view = this.children.findByModel(model);
        view.trigger('focused');
        view.highlightForEdit();

    },

    onItemViewClicked: function(view){
        this.children.each(function(each){
            if(each != view){
                each.showSelected(false);
            }
        });
        view.showSelected(true);
    },



});

exports.CategoriesCompositeView = CategoriesCompositeView;

});
