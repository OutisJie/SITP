import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';


const root = document.createElement('body');
root.innerHTML = "<div id='root'></div>"
ReactDOM.render(<App/>, document.getElementById('root'))