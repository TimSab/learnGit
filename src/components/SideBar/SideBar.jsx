import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./SideBar.module.scss";

const SideBar = (props)=>{
    return(
        <div className = {s.sideBar}>
            <ul className = {s.sideBar__list}>
                <li className={s.sideBar__item}>
                    <NavLink to={`/profile/${props.myId}`}>Моя страница</NavLink> 
                </li>
                <li className={s.sideBar__item}>
                    <NavLink to="/users">Пользователи</NavLink> 
                </li>
            </ul>
        </div>
    )
};
const mapStateToProps=(state)=>{
    return{
        myId:state.auth.data?.id
    }
}
const SideBarContainer = connect(mapStateToProps,null)(SideBar);
export default SideBarContainer;