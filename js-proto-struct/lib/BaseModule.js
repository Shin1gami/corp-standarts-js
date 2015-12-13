/**
 * Базовый модуль
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
     * Базовый метод для изменения области видимости на интанс модуля, и передачи объектов события и элемента как аргументы.
     * Легковесный аналог jQuery.proxy
     * Можно использовать стандартный способ навещиваний событий, и обращаться к свойствам через Instance.prototype
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
