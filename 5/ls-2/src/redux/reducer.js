
const initialState = {
    title: "old title",  
    menu: false,
    users: [],
    value: ""

}
export default function  reducer (state = initialState, action) {
    if(action.type === "CHANGE_TITLE") {
        return {...state, title: "new title"}
    }

    else if(action.type === "HANDLE_MENU") {
        return {...state, menu: !state.menu}
    }
    else if(action.type === "VALUE") {
        return {...state, value: action.payload }
    }
    else if(action.type === "ADD_USER") {
        return {...state, users: [...state.users, action.payload]}
    }
    else if(action.type === "DELETE_ALL") {
        return {...state, value: "",  users: [] }
    }
    return state
}