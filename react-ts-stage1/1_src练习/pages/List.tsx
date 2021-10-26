import React from 'react';

class List extends React.Component {
    state = {
        // peopleArr: [
        //     {id:1,name:'Alice',age:25},
        //     {id:2,name:'Jack',age:27},
        //     {id:3,name:'Tom',age:28}
        // ]
        peopleArr: []
    }
    render() {
        const { peopleArr } = this.state;
        console.log(peopleArr.length > 0 ? 1 : 0);
        return (
            <div>
                list……
                {
                    peopleArr.length > 0 ?
                        (
                            <ul>
                                {
                                    peopleArr.map((item:any) => {
                                        return <li key={item.id}>name={item.name}age={item.age}</li>
                                    })
                                }
                            </ul>
                        ) :
                        <p>网络出错</p>
                }
            </div>
        );
    }
}

export default List;