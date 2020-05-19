import * as types from '../Actions/ActionTypes';

const initialState = {
    scrollNeedUpdate : false
};

function scroll(state = initialState, action){
    switch(action.type){
        case types.SCROLL_NEED_UPDATE:
        return {
            ...state,
            scrollNeedUpdate : true
        };
        case types.UPDATE_SCROLL:
        return {
            ...state,
            scrollNeedUpdate : false
        };
        default:
        return state
    }
}

export default scroll;
