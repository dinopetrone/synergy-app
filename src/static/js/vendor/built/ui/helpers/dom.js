define(function (require, exports, module) {

var marionette = require('marionette');

function getElement(value){
    var $el;

    if(_.isString(value)){
        $el = $(value);
    } else {
        $el = value;
    }

    return $el;
}

function getElementPosition ($el) {
    // http://stackoverflow.com/questions/4500758/getting-relative-mouse-x-y-in-javascript
    // http://www.quirksmode.org/js/findpos.html

    var curleft = 0;
    var curtop = 0;
    var obj;

    if($el.nodeName){
        obj = $el;
    } else {
        obj = $el[0];
    }

    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);

        return { x: curleft, y: curtop };
    }
}

function getElementBounds($el) {
    // el is raw dom element
    // returns ClientRect: {'bottom', 'height', 'left', 'right', 'top', 'width'}

    if($el.nodeName){
        return $el.getBoundingClientRect();
    }

    return $el[0].getBoundingClientRect();
}



function objectFromElement($element, map){
    var key;
    map = map || {};
    $element = getElement($element);
    var node = $element[0];
    var attrs = {};

    for(var i=0; i < node.attributes.length; i++){
        var obj = node.attributes[i];
        key = map[obj.name] || obj.name;
        attrs[key] = obj.value;
    }
    key = map['content'] || 'content';
    attrs[key] = $element.text();
    return attrs;
}

function modelFromElement($element, Model, map){
    Model = Model || Backbone.Model;
    map = map || {};
    $element = getElement($element);
    var obj = objectFromElement($element, map);
    return new Model(obj);
}

exports.modelFromElement = modelFromElement;
exports.objectFromElement = objectFromElement;
exports.getElement = getElement;
exports.getElementBounds = getElementBounds;
exports.getElementPosition = getElementPosition;

});
