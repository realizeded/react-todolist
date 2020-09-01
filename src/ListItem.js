import React from 'react';
import PropTypes from 'prop-types';
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.handleClick = this.handleClick.bind(this);
    } 
    /**componentWillReceiverProps  
     * 1.从父组件接收过来的props改变 
     * 2.子组件第一次存在于父组件中不会执行  否则则会执行
     * 2.父组件render函数执行
     * */
   /*  componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    } */
    shouldComponentUpdate(preProps,preState) {
        if(preProps.content!==this.props.content) {
            return true;
        }
        return false;
    }
    render() {
        console.log('child render');
        const {content,test} = this.props;
        return (<li onClick={this.handleClick}>
            {content}-{test}
            </li>);
    }
    componentDidMount() {
        //发起请求
        let xhr = new XMLHttpRequest();
        xhr.open('get','www.baidu.com',true);
        xhr.send(null);
        xhr.onreadstatechange = function() {
            if(xhr.readState===4) {
                if(xhr.status===200) {
                    let data = JSON.parse(xhr.responseText);
                }
            }
        }
    }
    handleClick() {
        // console.log(this);
        // alert(this.props.index)
        let index = this.props.index;
        this.props.deleteItem(index);
    }
    /* 
     组件被剔除的那一刻时 该生命周期会执行
    */
/*     componentWillUnmount() {
        console.log('componentWillUnmount');
    } */
}
    ListItem.propTypes = {
        test:PropTypes.string.isRequired
    };
    ListItem.defaultProps = {
        test:'assas'
    };
export default ListItem;