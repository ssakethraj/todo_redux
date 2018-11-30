import { combineReducers } from 'redux';

function todo(state=[], action) {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                action.payload
            ]
        default: 
            return state;
    }
}

const todoApp = combineReducers({todo});
export default todoApp;

