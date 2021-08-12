import { profileApi } from "../api/api";

const SET_STATUS = "SET_STATUS";
const SET_IMG = "SET_IMG";
const SET_PROFILE = "SET_PROFILE";

const initialState = {
    status:"",
    img:"",
    profile:{
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        contacts:{ 
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null
        },
        photos:{
            small:null,
            large:null
        }
    }
}
const profileReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_STATUS:
            return{
                ...state,
                status: action.newStatus
            }
        case SET_IMG:
            return{
                ...state,
                profile:{
                    ...state.profile,
                    photos:{
                        ...state.profile.photos,
                        large:action.img
                    }
                }
            }
        case SET_PROFILE:
            return{
                ...state,
                profile:action.profile
            }
        default:
            return state;
    }
}

export const setStatus=(newStatus)=>({type:SET_STATUS, newStatus:newStatus});
export const setLargeImg=(img)=>({type:SET_IMG, img});
export const setProfile=(profile)=>({type:SET_PROFILE, profile});

export const getStatus=(userId)=>(dispatch)=>{
    profileApi.requestStatus(userId).then(response=>{
        dispatch(setStatus(response));
    })
}

export const updateStatus=(status)=>(dispatch)=>{
    profileApi.putStatus(status).then(response=>{
        if(!response.resultCode){
            dispatch(setStatus(status));
        }
    })
}

export const savePhoto=(photo)=>(dispatch)=>{
    profileApi.putPhoto(photo).then(response=>{
        if(!response.resultCode){
            dispatch(setLargeImg(response.data.large));
        }
    })
}

export const getProfile=(userId)=>(dispatch)=>{
    profileApi.requestProfileData(userId).then(response=>{
        if(!response.resultCode){
            dispatch(setProfile(response));
        }
    })
}

export const updateProfile=(profile, myId)=>(dispatch)=>{
    profileApi.putProfileData(profile).then(response=>{
        if(!response.resultCode){
            dispatch(getProfile(myId));
        }
    })
}

export default profileReducer;