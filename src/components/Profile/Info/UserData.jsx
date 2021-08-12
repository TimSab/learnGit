import React from "react";
import s from "./ProfileInfo.module.scss";

const UserData = ({profile, isOwner, setEditMode})=>{
    const onClick = ()=>{
        setEditMode(true);
    }
    return(
        <div className = {s.userData}>
            {isOwner && <button onClick={onClick}>Edit</button>}
            <div>Имя: {profile.fullName}</div>
            <div>Ищет работу: {profile.lookingForAJob ? profile.lookingForAJobDescription:"нет"}</div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>Contacts:{Object.keys(profile.contacts).map(key=>{
                return <Contact key={key} contactTitle = {key} contactValue={profile.contacts[key]}></Contact>
            })}</div>
        </div>
    )
}

export const Contact = ({contactTitle, contactValue})=>{
    return(
        <div>{contactTitle}:{contactValue}</div>
    )
}
export default UserData;
