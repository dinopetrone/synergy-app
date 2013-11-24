define(function(require, exports, module) {

var marionette = require('marionete');
var handlebars = require('handlebars');

marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate){
    return handlebars.compile(rawTemplate);
};

});

