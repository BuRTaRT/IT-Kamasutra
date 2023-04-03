import React from "react";
import s from "./styles.module.css";
import UsersPhoto from "./images/bladerunner.jpg";
import {NavLink} from "react-router-dom";
import Preloader from "../../common/Preloader";


function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <div>
                {pages.map((pageNumber) => {
                    return <span onClick={() => props.onPageChanged(pageNumber)}
                                 className={props.currentPage === pageNumber ? s.selectedPage : s.userPage}>{pageNumber}</span>
                })}
                {props.users.map(u => {
                    return (
                        <div>
                            <NavLink to={'/profile/2'}><img style={{height: '100px', width: "110px", borderRadius: '100%'}}
                                          src={u.photos.small ? u.photos.small : UsersPhoto}
                                          alt="avatar"/>
                            </NavLink>
                            <div>{u.name}</div>
                            {/*<div>{`${u.location.country} ${u.location.city}`}</div>*/}
                            <div></div>
                            <button
                                onClick={() => props.follow(u.id)}>{u.followed ? 'unfollow' : 'follow'}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )


}

export default Users;