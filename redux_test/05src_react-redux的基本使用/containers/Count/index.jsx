/*
    容器组件,借助react-redux
*/
// 引入Count的UI组件
import CountUI from '../../components/Count'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action';

// a函数的返回值作为状态传递给了UI组件
// 就是要把你传递的东西作为返回值
// 之前react-redux调用这个函数的时候，已经传入store参数了
function mapStateToProps(state) {
    // props传递的时候都是以key value的形式
    // 相当于<CountUI n={900}/>
    return { count: state }
}

// 返回值中的value是操作状态的方法
function mapDispathToProps(dispath) {
    return {
        jia: (data) => {
            // 通知redux执行加法
            dispath(createIncrementAction(data))
        },
        jiaAsync: (data, time) => {
            // 通知redux执行加法
            dispath(createIncrementAsyncAction(data, time))
        },
        jian: (data) => {
            dispath(createDecrementAction(data))
        }
    }
}


// 这样跟ui建立起了联系,暴露一个Count的容器组件
// connect在第一次调用的时候要传入两个参数，且必须是函数
export default connect(mapStateToProps, mapDispathToProps)(CountUI);


