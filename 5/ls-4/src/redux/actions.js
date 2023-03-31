import {types} from "./types";




export function preloaderOn() {
    return {
        type: types.PRELOADER_ON
    }
}

export function preloaderOff() {
    return {
        type: types.PRELOADER_OFF
    }
}

 function alertAction (info) {
    return {
        type: types.ALERT_ON,
        payload: info
    }
 }
function alertActionOff (info) {
    return {
        type: types.ALERT_OFF,
        payload: info
    }
}

export function regUserAction(user) {
    return async function (dispatch) {
        dispatch(preloaderOn())
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users',options)

        if(response.status === 201) {
            dispatch(preloaderOff())
            dispatch(alertAction({massage: "успешно", variant: "successful"}))

        }
        else if(response.status === 404){
            dispatch(preloaderOff())
            dispatch(alertAction({massage: "ошибка", variant: "danger"}))


            setTimeout(() => {
                dispatch(alertActionOff())
            }, 3000)
        }
    }
}



