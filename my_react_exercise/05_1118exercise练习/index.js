import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
// import store from './redux/store'
ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>
,
    document.getElementById('root'));

// store.subscribe(()=>{
//     ReactDOM.render(<App/>,document.getElementById('root'));
// })
