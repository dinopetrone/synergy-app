define(function( require, exports, module ){

var backbone = require('backbone');
var Tasks = require('./collections/tasks').Tasks;

var Task = backbone.Model.extend({
    defaults: {
        label:'Task Name'
    }
});

var Category = backbone.Model.extend({
    defaults: {
        label:'Project Name'
    },
    initialize: function(){
        var tasks = this.get('tasks');
        // if(!tasks){

        // }
        this.tasks = new Tasks();
        console.log(this.get('id'))
    },
});


exports.Category = Category;
exports.Task = Task;

});
