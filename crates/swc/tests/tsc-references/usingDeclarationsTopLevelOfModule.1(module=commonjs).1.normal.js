//// [usingDeclarationsTopLevelOfModule.1.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    w: function() {
        return w;
    },
    x: function() {
        return x;
    },
    y: function() {
        return y;
    }
});
const _dispose = require("@swc/helpers/_/_dispose");
const _using = require("@swc/helpers/_/_using");
const x = 1;
const w = 3;
try {
    var _stack = [];
    var z = _using._(_stack, {
        [Symbol.dispose] () {}
    });
    var y = 2;
    var _default = 4;
    console.log(w, x, y, z);
} catch (_) {
    var _error = _;
    var _hasError = true;
} finally{
    _dispose._(_stack, _error, _hasError);
}
