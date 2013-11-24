define(function (require, exports, module) {

var marionette = require('marionette');

var AppController = marionette.Controller.extend({
    initialize : function(options){
        this.app = options.app;
    }
});

exports.AppController = AppController;

});
