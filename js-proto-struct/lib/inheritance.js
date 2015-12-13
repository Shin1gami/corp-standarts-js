var _createClass = (function () {
    /**
     * @param target
     * @param props
     */
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) {
            var props = [];

            for (var name in protoProps) {
                if (protoProps.hasOwnProperty(name)) {
                    props.push({
                        key: name,
                        get: function get() {
                            return protoProps[name];
                        }
                    })
                }
            }

            defineProperties(Constructor.prototype, props);
        }
        if (staticProps) {
            defineProperties(Constructor, staticProps);
        }
        
        return Constructor;
    };
})();

/**
 * @param subClass
 * @param superClass
 * @private
 */
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
