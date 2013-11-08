function Lib() {
    'use strict';

    var exports = {};

    exports.check = function(val, context) {
        if ((typeof val).toLowerCase() == 'string') {
            var parts = val.split('.');
            if (!val)
                return false;

            var level = '';
            var testObj = JSON.parse(JSON.stringify(context));

            while (parts.length){
                level = parts.shift();
                if(!testObj[level])
                    return false;
                else
                    testObj = testObj[level]
            }
            return true;
        }
        else {
            return !!val;
        }
    }

    return exports;
}
