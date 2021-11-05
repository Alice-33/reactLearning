import React, { Component } from 'react'
import { Modal, Form, Input, Button, DatePicker, Typography } from 'antd';
import { withRouter, Route } from 'react-router';
import { DeleteOutlined } from '@ant-design/icons';
import Third from '../Third';
import PubSub from 'pubsub-js'

class Second extends Component {
    formRef = React.createRef();
    secondForm = React.createRef();
    state = {
        visible: false,
        id: 0,
        otherMember: []
    }

    nextPart = () => {
        let firstData = this.props.location.state.data;
        const current = this.secondForm.current;
        console.log(this.secondForm)
        let secondData = ({
            userBirth: current.getFieldValue('userBirth'),
            userTel: current.getFieldValue('userTel'),
            userMember:this.state.otherMember,
            userEducation: current.getFieldValue('userEducation'),
            introduction: current.getFieldValue('introduction'),
        });
        console.log('第二步', secondData);
        this.props.history.push({ pathname: '/third', state: { firstData, secondData } })
        PubSub.publish('changeStep', { current: 2 })
    }
    showUserModal = () => {
        this.setState({ visible: true });
    }
    handleOk = (e) => {
        // this.formRef.current.submit();
        let current = this.formRef.current;
        const { otherMember, id } = this.state;
        let newMember = {
            id: id + 1,
            othername: current.getFieldValue('othername'),
            relationship: current.getFieldValue('relationship')
        }
        console.log('hi', otherMember)
        this.setState({ id: id + 1, visible: false, otherMember: [...otherMember, newMember] });
        current.resetFields();
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };
    deleteMember = (id) => {
        // 遍历数组，删除id为传入值的
        const { otherMember } = this.state;
        let newArray = otherMember.filter(item => item.id !== id);
        this.setState({ otherMember: newArray });
    };
    render() {
        const { otherMember, visible } = this.state;
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
                    ref={this.secondForm}
                >
                    <Form.Item
                        label="出生日期"
                        name="userBirth"
                    >
                        <DatePicker
                            placeholder='请输入出生日期'
                        //    onChange={onChange} 
                        />
                    </Form.Item>
                    <Form.Item
                        label="手机号"
                        name="userTel"
                        rules={[
                            {
                                pattern: /^[0-9]{11}$/,
                                message: '只能包含数字，且为11位!',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="家庭成员"
                        name="userMember"
                    >
                        {
                            otherMember.length > 0 ?
                                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                                    {
                                        otherMember.map(item => {
                                            return <li key={item.id}>
                                                {item.othername}--{item.relationship}
                                                {/* 增加一个删除按键 */}
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <DeleteOutlined onClick={() => this.deleteMember(item.id)} />
                                            </li>
                                        })
                                    }
                                </ul>
                                :
                                <Typography.Text className="ant-form-text" type="secondary">
                                    ( 没有添加家庭成员 )
                                </Typography.Text>
                        }
                    </Form.Item>
                    <Form.Item
                    >
                        <Button htmlType="button" onClick={this.showUserModal} style={{ margin: '0 75px' }} >
                            +添加成员
                        </Button>
                    </Form.Item>

                    <Form.Item
                        label="教育经历"
                        name="userEducation"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="自我介绍"
                        name='introduction'
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            下一步
                        </Button>
                    </Form.Item>
                </Form>
                <Route path='/third' component={Third} />

                <Modal
                    title="添加成员"
                    visible={visible}
                    onFinish={this.handleOk}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText='取消'
                    okText='确认'
                >
                    <Form
                        name='addMember'
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 15 }}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        ref={this.formRef}
                    >
                        <Form.Item
                            label="姓名"
                            name="othername"
                            rules={[{ required: true, message: '请输入姓名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="关系"
                            name="relationship"
                            rules={[{ required: true, message: '请输入关系!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
export default withRouter(Second);