import {INPUT_CHNAGE,ADD_ITEM,DELETE_ITEM} from './actionTypes'
const defaultState = {
    inputValue:'',
    list:[1,2]
}
export default function(state=defaultState,action) {
    let type = action.type;
    if(type===INPUT_CHNAGE) {
        const currState = JSON.parse(JSON.stringify(state));
        currState.inputValue = action.value;
        return currState;
    } else if (type===ADD_ITEM) {
        const currState = JSON.parse(JSON.stringify(state));
        currState.list.push(currState.inputValue);
        currState.inputValue = '';
        return currState;
    } else if (type===DELETE_ITEM) {
        const currState = JSON.parse(JSON.stringify(state));
        currState.list.splice(action.index,1);
        return currState;
    }
    return state;
}