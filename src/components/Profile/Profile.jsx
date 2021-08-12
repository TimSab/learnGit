import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileInfo from "./Info/ProfileInfo";
import s from "./Profile.module.scss";
import ProfileStatus from "./Status/ProfileStatus";

const Profile = ({img, ...props})=>{
    let id =props.match.params.userId;
    useEffect(()=>{
        props.getStatus(id);
        props.getAuthorized();
        props.getProfile(id)
    },[props.status, props.authorized, img,id])
    return(
        <div className = {s.profile}>
            <ProfileStatus {...props}></ProfileStatus>
            <ProfileInfo img={img} isOwner = {id ==props.myId} myId={props.myId} savePhoto={props.savePhoto} profile = {props.profile} 
                         updateProfile = {props.updateProfile}></ProfileInfo>
        </div>
    )
}

export default Profile;

