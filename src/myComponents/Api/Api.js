import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': "fae5b38e-b1bf-4b37-9225-396f2310fee4"}
})


export let usersApi = {
    getUsers:function (currentPage = 1, pageSize = 5) {
        return instance.get('users?page=' + currentPage + '&count=' + pageSize)
            .then(response => response.data.items)

    },
    onPageChangeAxios: function (pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data.items)
    }
}
// export function getUsers(currentPage=1,pageSize=5) {
// //     return instance.get('users?page='+currentPage+'&count='+pageSize)
// //         .then(response=>response.data.items)
// // }
// //
// // export function onPageChangeAxios(pageNumber,pageSize){
// //    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
// //         .then(response => response.data.items)
// // }