import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const User = (props)=>{
    useEffect(()=>{
        
    },[]);
    return(
        <>
            <div>
                <NavLink to={`/profile/${props.userId}`}>
                    <img src={props.smallImg || "https://media-exp1.licdn.com/dms/image/C4D0BAQEtfT1atapjcA/company-logo_200_200/0/1549289107066?e=2159024400&v=beta&t=U4SnZcPJonK7eHfgel57b5ktyTnlKLxDT3B9w0E5_PU"} alt="" />
                </NavLink>
            </div>
            <div>имя-{props.name}</div>
            <div>статус-{props.status}</div>
            {
                props.followed
                    ?<button onClick={()=>props.unfollow(props.userId)}>unfollow</button>
                    :<button onClick={()=>props.follow(props.userId)}>follow</button>
            }
        </>
    )
}

export default User;