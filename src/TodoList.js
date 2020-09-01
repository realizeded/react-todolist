import React ,{Component,Fragment} from 'react';
import ListItem from './ListItem';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue:'12',
            list:[]
        };
    }
    /* 
    组件更新前执行 返回true(更新) 或者 false(终止更新)   
    */
/*     shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    } */
    /* 
    当shouldComponentUpdate 返回true时
    页面立即更新之前执行
    */
/*     componentWillUpdate() {
        console.log('componentWillUpdate');
    } */
    /**
     * 页面更新完毕后执行
     */
/*     componentDidUpdate() {
        console.log('componentDidUpdate');
    } */
    // 组件即将挂载到页面上,该生命周期钩子会自动执行
/*     componentWillMount() {
        console.log('componentWillMount');
    } */
    render() {
        console.log('parent render');
        return (
            <Fragment>
                <label htmlFor="aa"></label>
                <div id="aa" className="todolist">
                    <input type="text" 
                    value={this.state.inputValue} 
                    onChange={this.inputValueChange.bind(this)}
                    ref={(input)=>this.input = input}
                    />
                    <button onClick={this.addListItem.bind(this)}>添加</button>
                </div> 
                <ul ref={(ul)=>this.ul=ul}>
                    {this.renderUl.apply(this)}
                </ul>
                </Fragment>
        );
    }
  /*   componentDidMount() {
        console.log('componentDidMount');
    } */
    renderUl() {
        const list = this.state.list;
        return list.map((value,index)=><ListItem deleteItem={this.handleDelete.bind(this)} key={index} index={index} content={value}/>);
    }
    inputValueChange(e) {
        //设置状态用setState
/*         this.setState({
            inputValue:e.target.value
        }); */
        console.log(1);
        const value = e.target.value;
        this.setState((preState)=>{
            // console.log(e,preState)
            return {inputValue:value};
        });
    }
    getHTML(val) {
        return {
            __html:val
        };
    }
    addListItem() {
        this.setState({
            inputValue:'',
            list:[...this.state.list,this.state.inputValue]
        },()=>{
            console.log(this.ul.children.length);
        });
    }
    handleDelete(index) {
        //immutable 不能去改变state里面的状态
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list
        });
    }
}
export default TodoList;