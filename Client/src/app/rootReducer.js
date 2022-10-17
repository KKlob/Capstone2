import { UPDATE_STATE, ADD_MEMBER_INFO, CHANGE_CURR_MEMBER } from './actionTypes';

const INI_STATE = {}

function rootReducer(state = INI_STATE, action) {
    switch (action.type) {
        case UPDATE_STATE:
            return { ...state, ...action.payload }
        case ADD_MEMBER_INFO:
            let memberData = state.memberData;
            memberData[action.payload.id] = action.payload;
            return { ...state, memberData }
        case CHANGE_CURR_MEMBER:
            let currMember = action.payload;
            return { ...state, currMember }
        default: return state;
    }
}

export default rootReducer;