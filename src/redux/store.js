import { applyMiddleware, compose } from "redux";
import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    auth:authReducer,
    appPage: appReducer,
    usersPage: usersReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;