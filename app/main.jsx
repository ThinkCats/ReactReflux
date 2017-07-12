import React from 'react';
import ReactDOM from  'react-dom';
import 'zent/css/index.css';
import Hello from './component.jsx';

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}