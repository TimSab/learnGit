import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAuthorizedSelector } from "../../selectors/authSelectors";
import s from "./Login.module.scss";
import { getAuthorized,login } from "../../redux/authReducer";
import { useEffect } from "react";
import { Field, Form } from "react-final-form";

const LoginForm =(props)=>{
    return(
        <Form onSubmit={props.onSubmit}>
            {
                ({handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field component="input" name="email"></Field>
                        </div>
                        <div>
                            <Field component="input" name="password"></Field>
                        </div>
                        <div>
                            <Field component="input" type="checkbox" name="rememberMe"></Field>
                        </div>
                        <div>
                            {props.captchaUrl && <img src={props.captchaUrl}></img>}
                            {props.captchaUrl && <Field component="input" name="captcha" ></Field>}
                        </div>
                        <button>Login</button>
                    </form>
                )
            }
        </Form>
    )
}

const Login = (props)=>{
    const login =(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    useEffect(()=>{
        props.getAuthorized();
    },[props.authorized])
    if(props.authorized) return <Redirect to={`/profile/${props.myId}`}></Redirect>;
    return(
        <div className = {s.login}>
            <LoginForm onSubmit ={login} captchaUrl={props.captchaUrl}></LoginForm>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        authorized:getAuthorizedSelector(state),
        myId:state.auth.data?.id,
        captchaUrl:state.auth.captchaUrl
    }
}
const LoginContainer = connect(mapStateToProps,{
    getAuthorized,
    login
})(Login)
export default LoginContainer;