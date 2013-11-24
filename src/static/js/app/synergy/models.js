define(function( require, exports, module ){

var backbone = require('backbone');

var Task = backbone.Model.extend({
    defaults: {
        label:'Task Name'
    }
});

var Category = backbone.Model.extend({
    defaults: {
        label:'Project Name'
    }
});


exports.Category = Category;
exports.Task = Task;

});
