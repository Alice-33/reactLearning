import React, { Component } from 'react'
import { Form, Input, Button, InputNumber,Radio } from 'antd';
import Second from '../Second';
import {withRouter,Route} from 'react-router-dom'
import PubSub from 'pubsub-js'

class First extends Component {
    firstForm=React.createRef();
    nextPart=()=>{
        const current=this.firstForm.current;
        // this.props.history.push('/second');
        let data=({
            username:current.getFieldValue('username')||'',
            usersex:current.getFieldValue('usersex')||'',
            userage:current.getFieldValue('userage')||''
        });
        this.props.history.push({pathname: '/second', state: {data}})
        // 发布消息
        PubSub.publish('changeStep',{current:1})
    }
    render() {
        return (
            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 10 }}
                    initialValues={{ remember: true }}
                    onFinish={this.nextPart}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    ref={this.firstForm}
                >
                    <Form.Item
                        label="姓名"
                        name="username"
                        rules={[{ required: true, message: '请输入姓名!' }]}
                    >
                        <Input />
                    </Form.Item>
                  
                    <Form.Item
                       label="性别"
                       name="usersex"
                       rules={[{ required: true, message: '请选择性别!' }]}
                   >
                        <Radio.Group>
                            <Radio value="男">男</Radio>
                            <Radio value="女">女</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="年龄"
                        name="userage"
                        rules={[{ required: true, type: 'number', min: 0, max: 99, message: '请输入年龄!' }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" >
                            下一步
                        </Button>
                    </Form.Item>
                </Form>

                <Route path='/second' component={Second} />
            </div>
        )
    }
}
export default withRouter(First);