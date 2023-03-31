const initialState = {
    title: "old title",
    aboutTitle: "old about title",
}

export default function (state = initialState, action){
    if(action.type === "CHANGE_TITLE") {
        return{...state, title: "new title"}
    }
    else if  (action.type === "CHANGE_ABOUT_TITLE"){
        return {...state, aboutTitle: "hello world"}
    }
    else if (action.type === "WITH_PARAMS") {
        return{...state, aboutTitle: action.payload}
    }
    else if (action.type === "INPUT_VALUE") {
        return{...state, aboutTitle: action.payload}
    }
    return state
}