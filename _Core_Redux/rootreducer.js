import { createStore, combineReducers } from "https://cdn.skypack.dev/redux";
import { countReducer } from "./countReducer.js";
import { colorReducer } from "./colorReducer.js";
import { color } from "./actionCreater.js";



export const rootReducer=combineReducers({
    count: countReducer,
    bgcolor: colorReducer
})