export function colorReducer(state=true,action){
switch(action.type){
    case "CLICK": return false
    default:return  state
}
}