import React from "react";
import s from "./styles.module.css";
import UsersPhoto from "./images/bladerunner.jpg";
import {NavLink} from "react-router-dom";
import Preloader from "../../common/Preloader";
import axios from "axios";


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
                            <NavLink to={`/profile/${u.id}`}><img
                                style={{height: '100px', width: "110px", borderRadius: '100%'}}
                                src={u.photos.small ? u.photos.small : UsersPhoto}
                                alt="avatar"/>
                            </NavLink>
                            <div>{u.name}</div>
                            {/*<div>{`${u.location.country} ${u.location.city}`}</div>*/}
                            <div></div>

                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': "fae5b38e-b1bf-4b37-9225-396f2310fee4"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }

                                        })
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': "fae5b38e-b1bf-4b37-9225-396f2310fee4"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }

                                        })

                                }}>follow</button>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )


}

export default Users;