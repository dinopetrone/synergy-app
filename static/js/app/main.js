define(function(require, exports, module) {
require('./renderer');

var AppController = require('./controller').AppController;



function main(options){
    var app = this;

    app.addRegions({
        categories:'.categories',
        tasks:'.tasks',
        inProgress:'.in-progress',
        completed:'.completed'
    });

    new AppController({app:this});

}

exports.main = main;
});

