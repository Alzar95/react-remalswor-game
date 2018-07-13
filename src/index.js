import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import './control';
import './index.css';
import Game from './containers/game';


ReactDOM.render(
    <Provider store={store}>
        <Game/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
