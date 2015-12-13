/**
 * @module BaseModule
 */
var BaseModule = (function () {
    /**
     * @constructor
     */
    function Instance() {
    }

    _createClass(Instance, {
        version: '1.0.0'
    });

    /**
     *
     * @param method
     * @returns {Function}
     */
    Instance.prototype.invoke = function invoke(method) {
        var self = this;
        return function (event) {
            self[method].call(self, event, $(this));
        };
    };

    return Instance;
})();
