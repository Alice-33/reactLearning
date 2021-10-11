import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';

ReactDOM.render(<App />, document.getElementById('root'));

// 只要redux中的状态发生任何的变化，整个APP就重新调用一下render
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'));
})
