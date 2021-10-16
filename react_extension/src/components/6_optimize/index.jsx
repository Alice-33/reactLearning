import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
    state = {
        carName: 'mini'
    }
    changeCar = () => {
        this.setState({carName:'jeep'});
    }
    // // 可以接到参数的
    // shouldComponentUpdate(nextProps,nextState){
    //     if(this.state.carName===nextState.carName)return false;
    //     return true;
    // }
    render() {
        console.log('parent');
        return (
            <div className='parent'>
                <h2>parent组件</h2>
                <span>车型{this.state.carName}</span>
                <br />
                <button onClick={this.changeCar}>换车</button>
                <Child carName='bike'/>
            </div>
        )
    }
}
class Child extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState){
    //     // 目前的props和state
    //     console.log(this.props,this.state);
    //     // 接下来要变化的props和state,但是没有自身的props
    //     console.log(nextProps,nextState);
    //     return !(this.props.carName===nextProps.carName)
    // }
    render() {
        console.log('child');
        return (
            <div className='child'>
                <h3>child组件</h3>
                <span>接到的车型:{this.props.carName}</span>
            </div>
        )
    }
}
