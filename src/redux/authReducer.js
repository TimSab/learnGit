import { authApi } from "../api/api";

const SET_AUTHORIZED = "SET_AUTHORIZED";
const SET_DATA = "SET_DATA";
const SET_CAPTCHA = "SET_CAPTCHA";

const initialState = {
    authorized:false,
    data:{
        id: null,
        email: null,
        login: null
    },
    captchaUrl:null
}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_AUTHORIZED:
            return{
                ...state,
                authorized: action.authorized
            }
        case SET_DATA:
            return{
                ...state,
                data: action.data
            }
        case SET_CAPTCHA:
            return{
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

export const setAuthorized=(authorized)=>({type:SET_AUTHORIZED, authorized});
export const setData=(data)=>({type:SET_DATA, data});
export const setCaptcha=(captchaUrl)=>({type:SET_CAPTCHA, captchaUrl});


export const getAuthorized=()=>(dispatch)=>{
    authApi.authMe().then(response=>{
        if(!response.resultCode){
            dispatch(setAuthorized(true));
            dispatch(setData(response.data));
        }
    })
}

export const getCaptcha=()=>(dispatch)=>{
    authApi.requestCaptcha().then(response=>{
            dispatch(setCaptcha(response.url));
    })
}

export const login=(email, password, rememberMe, captcha)=>(dispatch)=>{
    authApi.login(email, password,rememberMe, captcha).then(response=>{
        if(!response.resultCode){
            dispatch(getAuthorized());
        }
        else{ 
            if(response.resultCode == 10){
                dispatch(getCaptcha());
            }

        }
    })
    
}

export const logout=()=>(dispatch)=>{
    authApi.logout().then(response=>{
        if(!response.resultCode){
            dispatch(setAuthorized(false));
            dispatch(setData(null));
        }
    })
}


export default authReducer;