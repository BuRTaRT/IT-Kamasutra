import React from "react";
import axios from "axios";
import UsersPhoto from './images/bladerunner.jpg';
import s from "./styles.module.css"

class UsersC extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.updateUsers(response.data.items)
            })

    }
  onPageChanged=(pageNumber)=>{
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
          .then(response => {
              this.props.updateUsers(response.data.items);

          })

  }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map((pageNumber) => {
                        return <span   onClick={() => this.onPageChanged(pageNumber) }
                                     className={this.props.currentPage === pageNumber ? s.selectedPage : s.userPage}>{pageNumber}</span>
                    })}
                    {this.props.users.map(u => {
                        return (
                            <div>
                                <img style={{height: '100px', width: "110px", borderRadius: '100%'}}
                                     src={u.photos.small ? u.photos.small
                                         : u.photos.large ? u.photos.large : UsersPhoto}
                                     alt="avatar"/>
                                <div>{u.name}</div>
                                {/*<div>{`${u.location.country} ${u.location.city}`}</div>*/}
                                <div></div>
                                <button
                                    onClick={() => this.props.follow(u.id)}>{u.followed ? 'unfollow' : 'follow'}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )


    }

}

export default UsersC;