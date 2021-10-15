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


// 这样跟ui建立起了联系,暴露一个Count的容器组件
// connect在第一次调用的时候要传入两个参数，且必须是函数
export default connect(
    (state) => ({ count: state }),
    // (dispath) => ({
    //     jia: (data) => dispath(createIncrementAction(data)),
    //     jiaAsync: (data, time) => dispath(createIncrementAsyncAction(data, time)),
    //     jian: (data) => dispath(createDecrementAction(data))
    // })

    // mapDispatchToProps简写,只要提供action，react-redux可以自动的进行分发
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }
)(CountUI);


