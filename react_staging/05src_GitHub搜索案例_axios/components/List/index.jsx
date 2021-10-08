import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        let { users, isFirst, isLoading, err } = this.props;
        // avatar_url,html_url,login
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，点击进行查找</h2> :
                        (isLoading ? <h2>正在搜索中……</h2> :
                            (err != '' ? <h2 style={{color:'red'}}>{err}</h2> :
                                users.map((item) => {
                                    return (
                                        <div key={item.id} className="card">
                                            <a rel="noreferrer" href={item.html_url} target="_blank">
                                                <img alt='head_portrait' src={item.avatar_url} style={{ width: ' 100px' }} />
                                            </a>
                                            <p className="card-text">{item.login}</p>
                                        </div>
                                    )
                                })))

                }
            </div>
        )
    }
}
