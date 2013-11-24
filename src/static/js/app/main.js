define(function(require, exports, module) {

var AppController = require('./controller').AppController;
require('./renderer');


function main(options){
    var app = this;

    app.addRegions({
        categories:'categories',
        tasks:'tasks',
        inProgress:'in-progress',
        completed:'completed'
    });

    new AppController({app:this});

}

exports.main = main;
});

