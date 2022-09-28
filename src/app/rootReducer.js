import { UPDATE_STATE } from './actionTypes';

const INI_STATE = {}

function rootReducer(state = INI_STATE, action) {
    switch (action.type) {
        case UPDATE_STATE:
            return { ...state, ...action.payload }
        default: return state;
    }
}

export default rootReducer;