import React, { Component } from 'react'
import { Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

export default class App extends Component {
    render() {
        return (
            <div>
                App_
                <Button type="primary">点击</Button>
                <RocketOutlined />
            </div>
        )
    }
}
