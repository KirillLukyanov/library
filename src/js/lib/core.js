const $ = function(selector) { // $ - конструктор
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {} // если в аргументы ничего не передано, то возвращаем пустой объект
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector)); // добавляем в новый экземпляр объекта коллекцию
    this.length = document.querySelectorAll(selector).length; // устанавливаем свойство length нового экземпляра объекта
    return this; // возвращаем новый экземпляр объекта
};

$.prototype.init.prototype = $.prototype; // изначально здесь 2 конструктора: $ и $.prototype.init, записываем в свойство .prototype каждого экземпляра создаваемого объекта (this из 11 строки) значение $.prototype. Иными словами все объекты, созданные в конструкторе $ будут иметь свойство .prototype === $.prototype

window.$ = $; // укорачиваем обращение к глобальному объекту window

export default $;