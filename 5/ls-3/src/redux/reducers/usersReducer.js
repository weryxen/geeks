import {types} from "../types";

const initialState = {
    value: "",
    users: []
}

export default function usersReducer (state = initialState, action) {

    switch (action.type) {
        case types.VALUE:
            return{...state,  value: action.payload}

        case types.ADD_USER:
            return {...state,  users: action.payload}
        case types.DELETE_ALL:
            return {...state,  value: "", users: []}

        default: return state

    }
}