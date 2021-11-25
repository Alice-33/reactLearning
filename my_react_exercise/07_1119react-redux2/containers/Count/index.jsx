import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment,decrement} from '../../redux/action/count'

class Count extends Component {
        increment = () => {
            this.props.increment(1);
        }
        decrement = () => {
            this.props.decrement(1);
        }
        render() {
            console.log('props',this.props)
            let {count,personArr}=this.props;
            return (
                <div>
                    <h3>name当前的成绩是：{count}</h3>
                    <button onClick={this.increment}>点击加分</button>
                    <button onClick={this.decrement}>点击减分</button>
                    {
                        personArr.length>0?(
                            personArr.map((item,index)=>{
                                return <li key={index}>{index}===={item}</li>
                            })
                        ):''
                    }
                </div>
            )
        }
    }

export default connect(
    (state) => ({ 
        count: state.count ,
        // 前面的可以不一样，但是后面的一定得一样
        personArr:state.person
    }),
    {
        increment,
        decrement
    }
)(Count)