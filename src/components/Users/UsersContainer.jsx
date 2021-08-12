import React, { useEffect } from "react";
import s from "./Users.module.scss";
import User from "./User/User"
import { getUsers,follow,unfollow } from "../../redux/usersReducer";
import { connect } from "react-redux";


const Users = (props)=>{
    useEffect(()=>{
        props.getUsers(props.pageSize,props.pageNumber);
    },[])
    const pageCount = Math.ceil(props.totalCount/props.pageSize);
    const pages = [];
    for (let index = 1; index <= pageCount; index++) {
        pages.push(index);
    }
    return(    
        <>
            {
                pages.map(p=>{
                    return <span onClick={()=>props.getUsers(props.pageSize,p)}>{p}</span>
                })
            }
            {
                props.users.map(u =>{
                    return <User smallImg ={u.photos.small}
                                followed = {u.followed}
                                status = {u.status}
                                name = {u.name}
                                follow = {props.follow}
                                unfollow = {props.unfollow}
                                userId={u.id}>
                            </User>
                })
            }
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        pageNumber: state.usersPage.pageNumber
    }
}

const UsersContainer = connect(mapStateToProps,{
    getUsers,
    follow,
    unfollow
})(Users)
export default UsersContainer;