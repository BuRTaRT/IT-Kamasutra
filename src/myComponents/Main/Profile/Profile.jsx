import React from 'react';
import s from "./Profile.module.css";

function Profile(){
   return (
        <div className={s.profile}>
            <img src="https://i1.sndcdn.com/avatars-000407348541-ys6sng-t240x240.jpg" alt="profile-img"/>
            <div className={s.profile_info}>
                <h3>Artem B.</h3>
                <div>Date of birth: 1 March</div>
                <div>City: Kyiv</div>
                <div>education: BSU</div>
                <div>web site : www.</div>
            </div>
        </div>
    )
}
export default Profile;