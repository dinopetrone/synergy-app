define(function (require, exports, module) {

var marionette = require('marionette');

require('backbone/stickit');

var ListItem = marionette.ItemView.extend({
    tagName: 'li',
    className: 'list-group-item',
    bindings: {
        'label':'label',
        'input':'label'
    },

    ui: {
        label: 'label',
        input: 'input'
    },

    events : {
        'click label' : 'onLabelClick',
        'keypress input' : 'onEditKeypress',
        'click .toggle' : 'onToggle',
        'blur .edit' : 'onEditLoseFocus',
    },

    triggers : {
        'click' : 'focused'
    },

    onLabelClick : function(){
        this.toggleEditView();
        this.ui.input.focus();
    },

    toggleEditView : function(){
        this.ui.label.toggle();
        this.ui.input.toggle();
    },

    hideEditView : function(){
        this.ui.label.show();
        this.ui.input.hide();
    },

    onEditKeypress : function(evt){
        if(evt.keyCode == 13){
            this.hideEditView();
        }
    },

    onEditLoseFocus : function(evt){
        this.hideEditView();
    },

    onRender: function(){
        this.stickit();
    },

    onShow : function(){
        this.ui.input.hide();
    },

    highlightForEdit: function(){
        this.ui.label.hide();
        this.ui.input.show();
        this.ui.input.select();
    },

    showSelected : function(bool){
        if(!bool){
            this.$el.removeClass('active');
            this.hideEditView();
        }else{
            this.$el.addClass('active');
        }
    },
});

exports.ListItem = ListItem;

});
