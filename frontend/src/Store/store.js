import {legacy_createStore,applyMiddleware,combineReducers} from "redux"

import thunk from "redux-thunk"
import eventsReducer from "./events/events.reducer"
import userReducer from "./users/users.reducer"

const rootReducer=combineReducers({
   users:userReducer,
   events:eventsReducer
})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store