import $ from './core';
import './modules/display';
import './modules/classes';
import './modules/handlers';
import './modules/attributes';
import './modules/actions';
import './modules/effects';
import './components/dropdown';
import './components/modal';
import './components/tab';
import './components/accordion';
import './components/carousel';
import './services/requests';

export default $;

// $() - возвращает коллекцию по селектору

// .html() - аналог innerHTML - принимает аргумент и записывает его в элемент, без аргумента возвращает содержимое элемента;

// .eq(); - возвращает элемент аналогично $(), только один в соответствии с индексом среди соседей, который принимиет в качестве аргумента

// .index() - возвращает индекс по порядку среди соседей;

// .find() - ищет внутри элемента по селектору, возвращает коллекцию

// .closest() - возвращает ближайшего родителя по селектору

// .siblings() - возвращает соседей

// .setAttr(), getAttr(), toggleAttr() - взаимодействие с аттрибутами

// .addClass() .removeClass() toggleClass() - взаимодействие с классами

// .show() .hide() .toggle() - меняет свойство display

// .on() .off() .click() - навешивает или убирает обработчик событий, принимиет 2 аргумента: тип события и коллбэк функцию. клик принимает только коллбэк

// .fadeIn() .fadeOut() - плавное появление и иссчезновение элемента. Принимает в качестве аргументов длительность, какое свойство display ставить в конце и не обязательную колбэк функцию fin