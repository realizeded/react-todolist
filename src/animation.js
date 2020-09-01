import React from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import './App.css';
class Ani extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inProp:true,
            list:[]
        };
        this.handleClickToggle = this.handleClickToggle.bind(this);
    }
    render() {
        return (<div>
            <TransitionGroup>
            {
                this.state.list.map((val,index)=>{
                    return (<CSSTransition 
                        in={this.state.inProp} 
                        timeout={2000} 
                        classNames="my-node"
                        key={index}
                        > 
                             <div>{val}</div>
                         </CSSTransition>);
                })
            }
            </TransitionGroup>
            <button onClick={this.handleClickToggle}>toggle</button>
        </div>);
    }
    handleClickToggle() {
        this.setState((preState)=>{
            return {
                list:[...preState.list,'item']
            }
        });
    }

}
export default Ani;