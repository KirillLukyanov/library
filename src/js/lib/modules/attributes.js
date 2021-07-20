import $ from '../core';

$.prototype.setAttr = function(attr, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attr, value);
    }
    return this;
};

$.prototype.getAttr = function(attrName) {
    for (let i = 0; i < this.length; i++) {
        return this[i].getAttribute(attrName);
    }
};

$.prototype.toggleAttr = function(attrName) {
    for (let i = 0; i < this.length; i++) {
        this[i].toggleAttribute(attrName);
    }
    return this;
};