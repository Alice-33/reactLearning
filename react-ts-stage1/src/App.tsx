import React from 'react';
import Hello from './components/Hello';
import Hi from './components/Hi';

class App extends React.Component {
  private inputStr:any='';
  state={
    str:'',
    len:0
  }
  getLength=()=>{
    let str=this.inputStr.value;
    console.log(this.inputStr.value);
    this.setState({len:str.length})
    this.setState({str});
  }
  render() {
    return (
      <div>
        <h2>请输入文字：</h2>
        <input ref={(c:HTMLInputElement)=>this.inputStr=c} type="text" name="" id="" />
        <button onClick={this.getLength}>点击统计个数</button>
        <hr />
        <Hello str={this.state.str}/>
        <hr />
        <Hi baseNum={this.state.len}/>
      </div>
    );
  }
}

export default App;