import React from 'react';
import ReactDOM from  'react-dom';
import 'zent/css/index.css';
import Routes from './routes/index.jsx';

main();

function main() {
    ReactDOM.render(<Routes />, document.getElementById('app'));
}