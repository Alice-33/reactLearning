import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    // 此处用Provider进行包裹，是为了让APP的后代容器都能接收到store
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


