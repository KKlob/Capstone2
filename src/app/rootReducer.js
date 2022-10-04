import { UPDATE_STATE, ADD_INFO_TO_MEMBER } from './actionTypes';

const INI_STATE = {}

function rootReducer(state = INI_STATE, action) {
    switch (action.type) {
        case UPDATE_STATE:
            return { ...state, ...action.payload }
        case ADD_INFO_TO_MEMBER:
            if (state.mainDisplay === "Senate") {
                let senate = state.senateMembers;
                let mem = senate.get(action.payload.id);
                mem = { ...mem, ...action.payload };
                senate.set(action.payload.id, mem);
                return { ...state, senateMembers: senate, selectedMember: senate.get(action.payload.id) };
            } else {
                let house = state.houseMembers;
                let mem = house.get(action.payload.id);
                mem = { ...mem, ...action.payload };
                house.set(action.payload.id, mem);
                return { ...state, houseMembers: house, selectedMember: house.get(action.payload.id) };
            }
        default: return state;
    }
}

export default rootReducer;