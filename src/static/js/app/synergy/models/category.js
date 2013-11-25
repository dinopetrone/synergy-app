define(function( require, exports, module ){

var backbone = require('backbone');
var Tasks = require('../collections/tasks').Tasks;

var Category = backbone.Model.extend({
    defaults: {
        label:'Project Name'
    },
    initialize: function(){
        this.tasks = new Tasks({id:this.get('id')});
        this.tasks.fetch();
    },
});


exports.Category = Category;


});
