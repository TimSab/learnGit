import React from "react";
import { connect } from "react-redux";
import { getStatusSelector } from "../../selectors/profileSelectors";
import Profile from "./Profile";
import { setStatus,getStatus,updateStatus,savePhoto, getProfile, updateProfile } from "../../redux/profileReducer";
import { getAuthorized } from "../../redux/authReducer";
import { compose } from "redux";
import { withRedirect } from "../../hoc/withRedirect";
import { getAuthorizedSelector } from "../../selectors/authSelectors";
import { getImgSelector } from "../../selectors/profileSelectors";
import { withRouter } from "react-router-dom";

const mapStateToProps =(state)=>{
    return{
        status: getStatusSelector(state),
        authorized: getAuthorizedSelector(state),
        img: getImgSelector(state),
        myId:state.auth.data?.id,
        profile: state.profilePage.profile
    }
}
const ProfileContainer = compose(
    connect(mapStateToProps,{
        setStatus,
        getStatus,
        updateStatus,
        getAuthorized,
        savePhoto,
        getProfile,
        updateProfile
    }),
    withRedirect,
    withRouter
)(Profile)


export default ProfileContainer;

