import React from 'react';
import 'antd/dist/antd.css'; 
import { Input,Button,List,Typography} from 'antd';
import store from './store'
// import {INPUT_CHNAGE,ADD_ITEM,DELETE_ITEM} from './store/actionTypes';
import {getInputValueChange,getAddItemAction,getDeleteItem} from './store/actionCreator';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleChangeState.bind(this));
    }
    render() {
        return (<div>
            <div >
                <Input 
                value={this.state.inputValue} 
                placeholder="todo list" 
                style={{width:'400px',margin:'40px 10px 0 40px'}} 
                onChange={(e)=>this.handleChange(e)}
                />
                <Button type="primary" onClick={(e)=>this.handleClick(e)}>提交</Button>
            </div>
            <div style={{width:'400px',margin:'40px'}}>
            <List
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (
                    <List.Item onClick={e=>this.handleItemDelete(e,index)}>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
                />
                </div>
        </div>);
    }
    handleChange(e) {
        let value = e.target.value;
        const action = getInputValueChange(value);
        store.dispatch(action);
       
    }
    handleChangeState() {
       this.setState((preState)=>store.getState());
    }
    handleClick(e) { 
       const action = getAddItemAction();
       store.dispatch(action);
    }
    handleItemDelete(e,index) {
        const action = getDeleteItem(index);
        store.dispatch(action);
    }
}
export default TodoList;