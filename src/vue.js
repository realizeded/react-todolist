import React,{Component,Fragment} from 'react';
import './Vue.css';
import TodoList from './TodoList';
class Vue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:[1,2,3]
        };
    }
    render() {
            return (
            <Fragment>
                <TodoList />
                <a href="www.baidu.com">
                    百度
                </a>
                </Fragment>
            );
    }
}
export default Vue;