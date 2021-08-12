export function getStatusSelector(state){
    return state.profilePage.status;
}

export function getImgSelector(state){
    return state.profilePage.profile.photos.large;
}