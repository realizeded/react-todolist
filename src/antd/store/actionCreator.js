import {INPUT_CHNAGE,ADD_ITEM,DELETE_ITEM} from './actionTypes.js'
export const getInputValueChange = function(value) {
        const action = {
            type:INPUT_CHNAGE,
            value
        }
        return action;
};
export const getAddItemAction = function() {
    const action = {
        type:ADD_ITEM
      };
    return action;
}
export const getDeleteItem = function(index) {
    const action = {
        type:DELETE_ITEM,
        index
    }
    return action;
}