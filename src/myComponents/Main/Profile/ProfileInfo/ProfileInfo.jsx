import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props){
if(!props.profile){
    return <Preloader/>
}
  else return (
        <div className={s.profile}>
            <img src={props.profile.photos.large||
                "https://i1.sndcdn.com/avatars-000407348541-ys6sng-t240x240.jpg"}
                 alt="profile-img"/>
            <div className={s.profile_info}>
                <h3>{props.profile.fullName}</h3>
                <div>Date of birth: 1 March</div>
                <div>City: Kyiv</div>
                <div>education: BSU</div>
                <div>web site : www.</div>
            </div>
            <ProfileStatus status={'hello guys'}/>
        </div>
    )
}
export default ProfileInfo;