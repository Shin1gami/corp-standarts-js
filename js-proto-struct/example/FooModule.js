var Foo = (function (_MODULE) {
    _inherits(Instance, _MODULE);

    function Instance() {
        _MODULE.apply(this, arguments);
    }

    Instance.prototype.onClickHandler = function onClickHandler() {
        console.log('Dom element: ', this);
        console.log('Getting version: ', Instance.prototype.version);
    };

    Instance.prototype.onClickHandler2 = function onClickHandler2(a, b, c) {
        console.log(this, a, b, c);
    };

    Instance.prototype.init = function init() {
        $('.js-span-click').on('click', this.onClickHandler);
        $('.js-span-click-2').on('click', this.invoke('onClickHandler2'));

        /**
        Similar to:
        var self = this;
        $('.js-span-click-2').on('click', function() {
            self.onClickHandler2.call(self);
        });
         */

    };

    return Instance;
})(BaseModule);
