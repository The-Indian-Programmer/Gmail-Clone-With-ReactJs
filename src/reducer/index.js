import formhandle from "./openform";  
import signin from "./signin";
import {combineReducers} from "redux";   

const rootReducer = combineReducers({
    formhandle,
    signin        
})

export default rootReducer;