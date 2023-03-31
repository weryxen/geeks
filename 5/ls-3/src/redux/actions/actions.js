import {types} from "../types";


export  const  changeTitleActions = ()  => {
    return{
        type: types.CHANGE_TITLE
    }
}

export  const  changeWithParams = (title)  => {
    return{
        type: types.WITH_PARAMS,
        payload: title
    }
}
export  const  setValue = (value)  => {
    return {
        type: types.VALUE,
        payload: value
    }


}
export  const  addUserAction = (name)  => {
    return {
        type: types.ADD_USER,
        payload: name
    }
}
export  const  deleteAll = ()  => {
    return {
        type: types.ADD_USER,
    }
}