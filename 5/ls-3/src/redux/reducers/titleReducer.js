import {types} from "../types";

const initialState = {
    title: "old"
}

export default function (state = initialState, action) {
    // if ( action.type === types.CHANGE_TITLE) {
    //     return {...state, title: "new"}
    // }
    // return state
    switch (action.type) {
        case types.CHANGE_TITLE:
            return{...state,  title: "new"}
        default: return state
        case types.WITH_PARAMS:
            return {...state,  title: action.payload}
    }
}