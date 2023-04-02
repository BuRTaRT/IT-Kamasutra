import React from "react";
import axios from "axios";
import UsersPhoto from './images/bladerunner.jpg';

function Users(props) {
    if(props.users.length<3)(
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response=>{
           props.updateUsers(response.data.items)
        })
    )


   return props.users.map(u => {
        return (
            <div>
                <img style={{height: '100px', width: "110px", borderRadius: '100%'}} src={UsersPhoto} alt="avatar"/>
                <div>{u.name}</div>
                {/*<div>{`${u.location.country} ${u.location.city}`}</div>*/}
                <div>{u.status}</div>
                <button onClick={() => props.follow(u.id)}>{u.followed ? 'unfollow' : 'follow'}</button>
            </div>
        )
    })


}

export default Users;