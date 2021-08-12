import { usersApi } from "../api/api";

const ADD_USER = "ADD_USER";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT= "SET_TOTAL_COUNT";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
    users:[
        {
            id:null,
            status:null,
            name:null,
            photos:{
                small:null,
                large:null
            },
            followed:null
        }
    ],
    totalCount:null,
    pageSize:7,
    pageNumber:1
    
}
const usersReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_USER:
            return{
                ...state,
                users:[
                    ...state.users,
                    action.user
                ]
            }
        case SET_USERS:
            return{
                ...state,
                users:action.users
            }
        case SET_TOTAL_COUNT:
            return{
                ...state,
                totalCount:action.totalCount
            }
        case FOLLOW:
            return{
                ...state,
                users:state.users.map(u=>{
                    return (u.id===action.userId
                        ?{...u, followed:true}
                        :{...u})
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users:state.users.map(u=>{
                    return (u.id===action.userId
                        ?{...u, followed:false}
                        :{...u})
                })
            }
        default:
            return state;
    }
}

export const addUser=(user)=>({type:ADD_USER, user});
export const setUsers=(users)=>({type:SET_USERS, users});
export const setTotalCount=(totalCount)=>({type:SET_TOTAL_COUNT, totalCount});
export const followSucces=(userId)=>({type:FOLLOW, userId});
export const unfollowSucces=(userId)=>({type:UNFOLLOW, userId});

export const getUsers=(count, page)=>(dispatch)=>{
    usersApi.getUsers(count, page).then(response=>{
        dispatch(setUsers(response.items));
        dispatch(setTotalCount(response.totalCount));
    })
}

export const follow=(userId)=>(dispatch)=>{
    usersApi.follow(userId).then(response=>{
        if(!response.resultCode){
            dispatch(followSucces(userId))
        }
    })
}

export const unfollow=(userId)=>(dispatch)=>{
    usersApi.unfollow(userId).then(response=>{
        if(!response.resultCode){
            dispatch(unfollowSucces(userId))
        }
    })
}

export default usersReducer;