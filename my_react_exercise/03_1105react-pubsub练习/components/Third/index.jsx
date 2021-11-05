import React, { Component } from 'react'
import { Route } from 'react-router'
import {Table} from 'antd';
import First from '../First'
import moment from 'moment';
export default class Third extends Component {
    render() {
        console.log('第三步', this.props.location.state);
        const { username, usersex, userage } = this.props.location.state.firstData;
        const { userBirth, userTel, userMember, userEducation, introduction } =
            this.props.location.state.secondData;
        const dataSource = [
            {
                key: '1',
                formKey: '姓名',
                formVal: username,
            },
            {
                key: '2',
                formKey: '性别',
                formVal: usersex,
            },
            {
                key: '3',
                formKey: '年龄',
                formVal: userage,
            },
            {
                key: '4',
                formKey: '出生日期',
                formVal: moment(userBirth).format('YYYY-MM-DD') ||'',
            },
            {
                key: '5',
                formKey: '手机号',
                formVal: userTel||'',
            },
            {
                key: '6',
                formKey: '家庭成员',
                formVal: userMember.map(item=>{
                    return <li key={item.id}>{item.relationship}:{item.othername}</li>
                })||'',
            },
            {
                key: '7',
                formKey: '教育经历',
                formVal: userEducation||'',
            },
            {
                key: '8',
                formKey: '自我介绍',
                formVal: introduction||'',
            },
        ];

        const columns = [
            {
                title: '属性',
                dataIndex: 'formKey',
                width:'20%'
            },
            {
                title: '值',
                dataIndex: 'formVal',
            },
            
        ];

        return (
            <div>
                <h3>信息汇总</h3>
                <p>{username}, {usersex}, {userage}</p>

                <Table dataSource={dataSource} columns={columns} />;


                <Route path='/first' component={First} />
            </div>
        )
    }
}
