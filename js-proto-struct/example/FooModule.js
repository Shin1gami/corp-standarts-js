/**
 * Пример модуля, "занаследованного" от базового. 
 */
var Foo = (function (_MODULE) {
    _inherits(Instance, _MODULE);

    function Instance() {
        _MODULE.apply(this, arguments);
    }
    
    /**
     * Самый обычный обработчик события нажатия клика по элементу.
     * В качестве this выступает DOM элемент.
     * Свойства модуля можно запросить через прототип "конструктора" модуля (Instance.prototype)
     */
    Instance.prototype.onClickHandler = function onClickHandler() {
        console.log('Dom element: ', this);
        console.log('Getting version: ', Instance.prototype.version);
    };

    /**
     * Аналогичный обработчик события нажатия клика по элементу.
     * От первого отличается тем, что теперь роль this играет инстанс модуля, а DOM элемент передается вторым аргументом.
     * (сразу представлен как объект jQuery)
     */
    Instance.prototype.onClickHandler2 = function onClickHandler2(event, element) {
        console.log(this, event, element);
    };

    /**
     * Простейший метод инициализации модуля.
     */
    Instance.prototype.init = function init() {
        //Навешивает на элемент событие нажатия, обрабатывается стандартно
        $('.js-span-click').on('click', this.onClickHandler);
        
        /**
         * Делает тоже самое, но через базовый метод invoke.
         * Можно сказать, что это гиперлегкий вариант jQuery.proxy().
         * Нужен в тех случаях, чтобы в обработчике при обращении к this возвращался интанс модуля.
         * Подобного поведения можно достичь, если вызывать нужный метод через анонимную функцию с указанием области видимости:
         * var self = this;
         * $('.js-span-click-2').on('click', function() {
         *  self.onClickHandler2.call(self);
         *});
         * Если же не хочется заморачиваться со сменой области видимости, то можно просто навесить событие обычным способом,
         * а в обработчике обращаться к свойствам модуля через Instance.prototype
         */
        
        $('.js-span-click-2').on('click', this.invoke('onClickHandler2'));
    };

    return Instance;
})(BaseModule);
