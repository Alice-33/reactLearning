import React ,{useState}from 'react';

// 再来一个函数形式的,这个写一个计数形式的，父组件传过来一个base，在此基础上加一
interface IProps{
    baseNum:number
}
export default function Hi (props:IProps){
    let {baseNum}=props;
    console.log('base',baseNum,typeof 2)
    let [count, setCount] = useState(0);
    function add(){
        setCount(count+1);
    }

    // 是不是说更新一下会好
    React.useEffect(()=>{
        console.log('变化了')
        setCount(baseNum);
    },[baseNum])
    return(
        <div>
            <h2>Hi组件</h2>
            <h3>您输入的基础数字为：{count}</h3>
            <button onClick={add}>点击加1</button>
        </div>
    )
}