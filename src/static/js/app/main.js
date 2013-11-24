define(function(require, exports, module) {

var marionette = require('marionete');
var handlebars = require('handlebars');

marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate){
    return handlebars.compile(rawTemplate);
};

var SampleView = require('app/sample/views').SampleView;

function main(options){
    var app = this;

    app.addRegions({
        window: '#window'
    });

    app.window.show(new SampleView());
}

exports.main = main;
});

