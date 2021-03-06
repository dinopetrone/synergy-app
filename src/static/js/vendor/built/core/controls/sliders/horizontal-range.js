define(function(require, exports, module) {

var _ = require('underscore');
var HorizontalSlider = require('built/core/controls/sliders/horizontal').HorizontalSlider;
var normalizeInt = require('built/core/utils/helpers').normalizeInt;
var composeAll = require('built/core/utils/helpers').composeAll;

var HorizontalRangeSlider =  HorizontalSlider.extend({

    /**
     * Initialize HorizontalRangeSlider
     *
     * @see built/core/controls/sliders/horizontal.js
     */
    initialize: function(options) {
        this.constructor.__super__.initialize.apply(this, arguments);
    },

    // HorizontalSlider overrides

    setPositionAt: function(value, index) {
        value = this._restrictRangePositions(value, index);
        this.constructor.__super__.setPositionAt.call(this, value, index);
    },

    compose: function(container) {
        composeAll(
            container,
            this,
            'getRanges'
        );

        this.constructor.__super__.compose.call(this, container);
    },

    // Helper methods

    _restrictRangePositions: function(value, index) {
        var positions, min, max, result;

        positions = this.getPositions();
        min = positions[index - 1] || 0;
        max = positions[index + 1] || 1;
        result = normalizeInt(value, min, max);

        return result;
    },

    // Public Methods
    // TODO: Revisit - Make this api more useful.

    getRanges: function() {
        var positions, i, len, results, p1, p2;

        positions = this.getPositions();
        i = 0;
        len = positions.length;
        results = [];

        // not using _.map here because for loop was more clear / convenient
        for(i; i < len; i++) {
            p1 = positions[i];
            p2 = positions[i + 1];

            // skip any range that does not have a second value
            // this is usually the right most range / handle
            if(typeof p2 === 'undefined') {
                continue;
            }

            results.push(Math.abs(p2 - p1));
        }

        return results;
    }

}); // eof HorizontalRangeSlider

module.exports.HorizontalRangeSlider = HorizontalRangeSlider;

}); // eof define
