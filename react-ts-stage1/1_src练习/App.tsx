import React from 'react';
import Hello from './components/Hello';
// import List from './pages/List';
import AppRouter from './router/AppRouter';

class App extends React.Component {
  myClick=(data:any)=>{
    console.log('App----'+data);
    
  }
  render() {
    return (
      <div>
        你好react-ts
        <Hello title='你好' onMyClick={this.myClick}/>
        {/* <List/> */}
        <AppRouter/>
      </div>
    );
  }
}

export default App;