import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { logout } from "../../redux/authReducer";

const Header = (props)=>{
    return(
        <div className = {s.header}>
            <div className = {s.content}>
                <div className={s.logo}>
                    <img src="" alt="" />
                </div>
                {
                    props.authorized
                        ?<div>{props.login} <button onClick={props.logout}>Logout</button></div>
                        :<NavLink to="/login">Login</NavLink>
                }
                <div className = {s.menu}>
                    <ul className = {s.menu__list}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className = {s.controls}></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        authorized:state.auth.authorized,
        login:state.auth.data?.login
    }
}

const HeaderContainer = connect(mapStateToProps,{
    logout
})(Header)
export default HeaderContainer;