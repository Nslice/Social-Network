import axios from "axios";



const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "f12cedbb-e150-4ae0-90dc-a8c404b054e6"
    },
    timeout: 10_000
});


/**
 * @return {Promise}
 */
const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
};

const getUserProfile = userId => {
    return instance.get(`/profile/${userId}`)
        .then(response => response.data);
};

const follow = userId => {
    return instance.post(`follow/${userId}`,{})
        .then(response => response.data);
};

const unfollow = userId => {
    return instance.delete(`follow/${userId}`)
        .then(response => response.data);
};


// TODO: это надо перенести в другой файл с API, типо authApi.js
const authMe = () => {
    return instance.get(`/auth/me`)
        .then(response => response.data);
};


export const userApi = {
    getUsers,
    getUserProfile,
    follow,
    unfollow,
    authMe
};