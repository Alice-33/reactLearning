import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './redux/store';
// 把所有容器都需要的那个store，交给provider，它就可以自动分析整个应用中
// 所有的容器组件，把store传给需要store的组件
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// 只要redux中的状态发生任何的变化，整个APP就重新调用一下render
// store.subscribe(()=>{
//     ReactDOM.render(<App/>,document.getElementById('root'));
// })
