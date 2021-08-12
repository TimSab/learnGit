import { getAllByAltText } from "@testing-library/react";
import { getAuthorized } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

const initialState = {
    initialized:false
}

const appReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_INITIALIZED:
            return{
                ...state,
                initialized: action.initialized
            }
        default:
            return state;
    }
}

export const setInitialized=(initialized)=>({type:SET_INITIALIZED, initialized});

export const getInitialized=()=>(dispatch)=>{
    let authorized = dispatch(getAuthorized());

    Promise.all([authorized]).then(()=>{
        dispatch(setInitialized(true));
    })
}

export default appReducer;