define(function (require, exports, module) {

var marionette = require('marionette');

var CategoryItemView = require('./category').CategoryItemView;
var template = require('hbs!../templates/categories');
var Categories = require('app/synergy/collections').Categories;


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

    },
    onAddClick: function(e){
        this.collection.add({label:'Project Name'});
    },

    onItemViewClicked: function(view){
        this.children.each(function(each){
            if(each != view){
                each.showSelected(false);
            }
        })
        view.showSelected(true);
    },



});

exports.CategoriesCompositeView = CategoriesCompositeView;

});
