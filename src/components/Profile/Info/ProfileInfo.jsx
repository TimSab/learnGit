import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./ProfileInfo.module.scss";
import UserData from "./UserData";
import UserDataForm from "./UserDataForm";

const ProfileInfo = (props)=>{
    const [editMode, setEditMode] = useState(false);
    const savePhoto = (e)=>{
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit =(formData)=>{
        props.updateProfile(formData,props.myId);
        setEditMode(false);
    }
    return(
        <div className = {s.profileInfo}>
            <div className={s.profileInfo__ava}>
                <img src={props.img || "https://media-exp1.licdn.com/dms/image/C4D0BAQEtfT1atapjcA/company-logo_200_200/0/1549289107066?e=2159024400&v=beta&t=U4SnZcPJonK7eHfgel57b5ktyTnlKLxDT3B9w0E5_PU"} alt="" />
            </div>
            {props.isOwner&& <input type="file" onChange={savePhoto}></input>}
            {editMode
                ?<UserDataForm profile = {props.profile} onSubmit={onSubmit}></UserDataForm>               
                :<UserData isOwner={props.isOwner} profile = {props.profile} setEditMode = {setEditMode}></UserData>}            
        </div>
    )
}

export default ProfileInfo;

