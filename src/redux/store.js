import { combineReducers, createStore } from "redux"
import itemReducer from "./reducers/itemReducer"
import nameReducer from "./reducers/nameReducer"

const rootReducer = combineReducers({
    items: itemReducer,
    username: nameReducer
})
const store = createStore(rootReducer)

export default store