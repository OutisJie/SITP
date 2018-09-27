"use strict"
const _ = require('lodash');

module.exports = function () {
    var element = document.createElement('h1');
    element.innerHTML = _.join(['hello', 'webpack', 'webpack-dev-server'], ' ');
    return element;
}