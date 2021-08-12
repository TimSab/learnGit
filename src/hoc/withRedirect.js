import { Redirect } from "react-router-dom"
import React from "react";

export const withRedirect = (Component) =>({authorized, ...props})=>{
    if(authorized){
        return <Component {...props}></Component>        
    }
    else{
        return <Redirect to="/login"/>
    }
}