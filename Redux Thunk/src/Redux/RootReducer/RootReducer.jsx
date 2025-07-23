import{combineReducers }from 'redux'
import userReducer from '../Reducers/userReducer'

const rootReducer=combineReducers({
    userState:userReducer
})

export default rootReducer;