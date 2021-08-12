import axios from "axios"

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "56368f5e-d40b-4fac-aeed-68f5468273d9"
    }
})
export const profileApi={
    requestStatus:(userId)=>{
        return instance.get(`profile/status/${userId}`).then((response)=>{
            return response.data;
        })
    },
    putStatus:(status)=>{
        return instance.put("profile/status",{status}).then(response =>{
            return response.data;
        })
    },
    requestProfileData:(userId)=>{
        return instance.get(`profile/${userId}`).then((response)=>{
            return response.data;
        })
    },
    putPhoto:(photo)=>{
        const formData = new FormData();
        formData.append("image", photo);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    putProfileData:(profile)=>{
        return instance.put(`/profile`,profile).then((response)=>{
            return response.data;
        })
    }
}

export const authApi={
    authMe:()=>{
        return instance.get(`/auth/me`).then((response)=>{
            return response.data;
        })
    },
    login:(email,password, rememberMe, captcha)=>{
        return instance.post(`/auth/login`,{email,password,rememberMe, captcha}).then((response)=>{
            return response.data;
        })
    },
    logout:()=>{
        return instance.delete(`/auth/login`).then((response)=>{
            return response.data;
        })
    },
    requestCaptcha:()=>{
        return instance.get(`/security/get-captcha-url`).then((response)=>{
            return response.data;
        })
    }
}

export const usersApi={
    getUsers:(count, page)=>{
        return instance.get(`/users?count=${count}&page=${page}`).then((response)=>{
            return response.data;
        })
    },
    follow:(userId) =>{
        return instance.post(`/follow/${userId}`).then((response)=>{
            return response.data;
        })
    },
    unfollow:(userId) =>{
        return instance.delete(`/follow/${userId}`).then((response)=>{
            return response.data;
        })
    },
}