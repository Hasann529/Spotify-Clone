import { combineReducers } from "redux"
import { reducer } from "./Reducer"

const finalReducer = combineReducers({
    users: reducer
})

export default finalReducer