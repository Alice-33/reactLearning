import React from 'react';
// import { Button } from 'antd';
interface IProps{
    title:any,
    age?:Number,
    onMyClick(data:any):void
}
interface IState{
    count:number,
}
class Hello extends React.Component<IProps,IState>{
    // constructor(props: any) {
    //     super(props);
    // }
    // 实现state,一定要加这个readonly
    state:Readonly<IState>={
        count:0
    }
    add=()=>{
        // this.setState({count:this.state.count+1})
        let count=this.state.count+1;
        this.setState({count})
    }
    sendMessage=()=>{
        console.log('事件触发');
        this.props.onMyClick('child event');
    }
    render() {
        return (
            <div>
                <h2>Hello Word！</h2>
                <h3>{this.props.title}</h3>
                <h3>当前的和为：{this.state.count}</h3>
                <button onClick={this.add}>点击加1</button>
                <button onClick={this.sendMessage}>发送消息</button>
                {/* <Button type="primary" shape="round"/> */}
            </div>
        );
    }
}

export default Hello;