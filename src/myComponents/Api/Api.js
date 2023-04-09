import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': "fae5b38e-b1bf-4b37-9225-396f2310fee4"}
})


export let usersApi = {
    getUsers: function (currentPage = 1, pageSize = 5) {
        return instance.get('users?page=' + currentPage + '&count=' + pageSize)
            .then(response => response.data.items)

    },
    unfollow: function (id) {
        return instance.delete(`follow/${id}`)
    },
    follow: function (id) {
        return instance.post(`follow/${id}`, {})
    }
}
export let profileApi = {
    setProfile: function (id) {
        return instance.get(`profile/${id}`)
    },
    getStatus: function (id) {
        return instance.get(`profile/status/${id}`)
    },
    putStatus: function (status) {
        return instance.put(`profile/status`,{status:status})
    }
}
export let authApi = {
    auth: function () {
        return instance.get(`auth/me`)
    }
}


