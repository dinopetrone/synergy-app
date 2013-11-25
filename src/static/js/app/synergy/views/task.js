define(function (require, exports, module) {

var marionette = require('marionette');
var template = require('hbs!../templates/task');
var ListItem = require('./list-item').ListItem;

var TaskItemView = ListItem.extend({
    template : template,

});

exports.TaskItemView = TaskItemView;

});
