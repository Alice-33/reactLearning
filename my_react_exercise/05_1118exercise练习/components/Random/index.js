import React, { Component } from 'react'

export default class Random extends Component {
    state = {
        presentNumber: '',
        yourNumber: [],
        isDisable1: false,
        isDisable2: false,
        isLuck: false,
        luckCount: 0
    }
    getPresentNumber = () => {
        let presentNumber = parseInt(Math.random() * 10);
        this.setState({ presentNumber, isDisable1: true });
    }
    getYourNumber = () => {
        let { yourNumber, presentNumber, luckCount } = this.state;
        let number = parseInt(Math.random() * 10);
        this.setState({ yourNumber: [...yourNumber, number] });
        if (number === presentNumber) {
            this.setState({ isLuck: true, luckCount: luckCount + 1 });
        }
        if (yourNumber.length === 9) {
            this.setState({ isDisable2: true });
            return;
        }
    }
    render() {
        let { presentNumber, yourNumber, isDisable1, isDisable2, isLuck, luckCount } = this.state;
        return (
            <div>
                <h3>本期中奖号码为:{presentNumber}</h3>
                <button onClick={this.getPresentNumber} disabled={isDisable1}>点击生成本期中奖号码</button>
                <h3>您的号码为:{
                    yourNumber.map((item, index) => {
                        if (index === 9) return item;
                        else return item + ',';
                    })
                }</h3>
                <button onClick={this.getYourNumber} disabled={isDisable2}>点击生成您的号码</button>
                <br />
                <br />
                {
                    (!isDisable1 || !isDisable2) ? (<div>正在抽奖……</div>)
                        : (isLuck ? (<div>恭喜中奖,中奖次数：{luckCount}</div>)
                            : (<div>谢谢参与</div>))
                }
            </div>
        )
    }
}
