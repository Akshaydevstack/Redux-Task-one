import {createStore,applyMiddleware} from'redux'
import rootReducer from '../RootReducer/RootReducer'
import {thunk} from "redux-thunk";


export const store=createStore(rootReducer,applyMiddleware(thunk))