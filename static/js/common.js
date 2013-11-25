require.config({
  paths : {
    'vendor': 'static/js/vendor',
    'jquery': 'static/js/vendor/jquery/jquery'
  },

   packages: [

        {
            location: 'static/js/app',
            name: 'app'
        },

        {
            location: 'static/js/vendor/built',
            name: 'built'
        },

        {
            location: 'static/js/vendor/bootstrap',
            name: 'bootstrap'
        },

        {
            location: 'static/js/vendor/underscore',
            name: 'underscore',
            main: 'lodash'
        },

        {
            location: 'static/js/vendor/handlebars',
            name: 'handlebars',
            main: 'handlebars'
        },

        {
            location: 'static/js/vendor/backbone',
            name: 'backbone',
            main: 'backbone'
        },

        {
            location: 'static/js/vendor/require',
            name: 'require'
        }

    ],

    map: {
        '*': {
            // built references
            'marionette': 'backbone/marionette',
            'modernizr': 'vendor/modernizr/modernizr',
            'backbone.localStorage': 'vendor/backbone/backbone-localStorage',

            // hbs names
            'Handlebars': 'handlebars',
            'hbs': 'require/hbs/hbs',
            'i18nprecompile' : 'require/hbs/i18nprecompile',
            'json2' : 'require/hbs/json2'
        }
    },


  hbs: {
        templateExtension : 'html',
        // if disableI18n is `true` it won't load locales and the i18n helper
        // won't work as well.
        disableI18n : true,
        helperDirectory: 'static/js/hbs/'
  },

  shim : {

    'backbone': {
        'deps': ['jquery', 'underscore'],
        'exports': 'Backbone'
    },

    'backbone/stickit' : {
      'deps' : ['backbone'],
      'exports' : 'Stickit'
    },

    'backbone/backbone-localStorage' : {
      'deps' : ['backbone'],
      'exports' : 'backbone.localStorage'
    },

    'backbone/validation' : {
      'deps' : ['backbone'],
      'exports' : 'Validation'
    },

    'backbone/marionette': {
        'deps': ['jquery', 'underscore', 'backbone'],
        'exports': 'Marionette'
    },

    'vendor/modernizr/modernizr': {
        'exports': 'Modernizr'
    }
  }
})
