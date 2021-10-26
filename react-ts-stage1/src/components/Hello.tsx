import React from 'react';

interface IProps{
    str:string
}
// 这里写一个类式组件,就是外部传来一个字符串，这边输出长度
class Hello extends React.Component<IProps> {

    render() {
        return (
            <div>
                <h2>类式组件Hello</h2>
                <h3>您输入的字符串为：{this.props.str}</h3>
                <h3>长度为为：{this.props.str.length}</h3>
            </div>
        );
    }
}

export default Hello;