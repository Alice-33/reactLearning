import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import FirstPage from '../FirstPage';
// 引入antdUI
import { Input, Spin, Button,message } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import './index.css'

const { Search } = Input;
class Head extends Component {
    state = {
        loading: false
    }
    goFistPage = () => {
        this.props.history.push('/firstpage')
    }
    onSearch = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
            alert('网络有误，请稍后再试')
        }, 3000);
    }
    share = () => {
        message.success('分享成功');
        setTimeout(() => {
            message.success('感谢分享');
        }, 1000);
    }
    render() {
        return (
            <div className='head-container'>
                <h2  ><button className='head-title' onClick={this.goFistPage}>10/27日练习</button></h2>
                <Route path='/firstpage' component={FirstPage} />
                <div className='head-right'>
                    <Search placeholder="input search text" onSearch={this.onSearch} />
                    <Spin className='head-spin' spinning={this.state.loading} size="middle" />
                </div>
                <Button className='head-share' type="primary" onClick={this.share}>
                    分享<ShareAltOutlined />
                </Button>
            </div>
        );
    }
}

export default withRouter(Head);;