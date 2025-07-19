import { DECREMENT, INCREMENT } from "./actionType.js"

export function Increment(value){
    return {type:INCREMENT,payload:value}
}

export function Decrement(value){
    return {type:DECREMENT,payload:value}
}