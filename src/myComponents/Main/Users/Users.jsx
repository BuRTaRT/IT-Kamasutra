import React from "react";


function Users(props) {
    let carry = () => {
        return props.follow;
    }

    let users = props.users.map(u => {
        return (
            <div>
                <img style={{height: '100px', width: "110px", borderRadius: '100%'}} src={u.avatarSrc} alt="avatar"/>
                <div>{u.fullName}</div>
                <div>{`${u.location.country} ${u.location.city}`}</div>
                <div>{u.status}</div>
                <button onClick={()=>props.follow(u.id)}>{u.followed ? 'unfollow' : 'follow'}</button>
            </div>
        )
    })
    return (
        <div>
            {users}
        </div>
    )

}

export default Users;