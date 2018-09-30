import _ from 'lodash';
import printMe from './print.js';
import './css/index.css'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.toggle('hello')
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;  // onclick 事件绑定原始的 printMe 函数上

    element.appendChild(btn);

    return element;
}

// document.body.appendChild(component())
let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}