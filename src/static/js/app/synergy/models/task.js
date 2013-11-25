define(function( require, exports, module ){

var backbone = require('backbone');

var Task = backbone.Model.extend({
    defaults: {
        label:'Task Name'
    }
});

exports.Task = Task;

});
