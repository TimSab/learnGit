import React from "react";
import { Field, Form } from "react-final-form";
import s from "./ProfileInfo.module.scss";
import { Contact } from "./UserData";


const UserDataForm = ({profile, onSubmit})=>{
    return(
        <Form onSubmit = {onSubmit}>
            {
                ({handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                        <button>Save</button>
                        <div>Имя:</div>
                        <Field component="input" name="fullName"></Field>
                        <div>Ищет работу:</div>
                        <Field component="input" type ="checkbox" name="lookingForAJob"></Field>
                        <Field component="input" name="lookingForAJobDescription"></Field>
                        <div>
                            <b>About me</b>:
                        </div>
                        <Field component="input" name="aboutMe"></Field>
                        <div>Contacts:{Object.keys(profile.contacts).map(key=>{
                            return (
                                <>
                                    <div>{key}</div>
                                    <Field component="input" name={"contacts."+key} defaultValue=""></Field>
                                </>
                            )
                        })}</div>
                    </form>
                )
            }
        </Form>
    )
}

export default UserDataForm;
