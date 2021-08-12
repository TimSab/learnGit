import { createForm, formSubscriptionItems } from "final-form";
import React from "react";
import { useState } from "react";
import { Field, Form } from "react-final-form";
import { NavLink } from "react-router-dom";
import s from "./ProfileStatus.module.scss";
 
const StatusForm = ({onSubmit,onBlur})=>{
    return(
        <Form onSubmit = {onSubmit} onBlur={onBlur} >
            {({handleSubmit, onBlur})=>(
                <form onSubmit = {handleSubmit}>
                    <Field component="input" name="status" onBlur={onBlur}/>
                </form>
            )}
        </Form>
    )
}


const ProfileStatus = (props)=>{
    const [editMode, setEditMode] = useState(false);
    const setStatus =(formData)=>{
        props.updateStatus(formData.status);
    }
    const updateStatus = (e)=>{
        props.updateStatus(e.currentTarget.defaultValue);
    }
    return(
        editMode
            ?<StatusForm onBlur={(e)=>{setEditMode(false);updateStatus(e)}} onSubmit={setStatus} status = {props.status}></StatusForm>
            :<div onDoubleClick={()=>{
                setEditMode(true);
            }}>{props.status}</div>
    )
}

export default ProfileStatus;

