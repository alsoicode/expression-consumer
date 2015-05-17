'use strict';

var utils = {
    checkExpressionFormat: function(expression) {
        /* 
            Expected format is: int operator int =
            e.g. 1+1=
        */

        return /^\d+[+]\d+[=]$/.test(expression);
    }
}

module.exports = utils;
