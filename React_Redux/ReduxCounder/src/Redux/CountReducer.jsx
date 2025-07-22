const inisialvalue={count:0,color:true}
export function countReducer(state=inisialvalue,action){
switch(action.type){
    case "INCREMENT": return{...state,count:state.count+action.payload}
    case "DECREMENT": return{...state,count:state.count-action.payload}
    case "COLOR": return{...state,color:!state.color}
    cas
    default: return state;
}

}