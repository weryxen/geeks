import {combineReducers} from "redux";
import preloader from "./preloader";
import alertReducer from "./alert";


export const rootReducer = combineReducers({
    preloader,
    alertReducer
})