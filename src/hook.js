import React from 'react';
class Hook extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Fragment>
                {/** React.createElement('div',{},React.createElement('div',{},'item12212')) */}
                item
                </Fragment>
        );
    }
    
}
export default Hook;
/* 
1.state数据
2.jsx模板
3.state+jsx 生成虚拟DOM 渲染成DOM
4.state数据改变
5.重新生成虚拟DOM 
6.通过diff算法找到需要更新的节点 
7.然后进行更新
 */