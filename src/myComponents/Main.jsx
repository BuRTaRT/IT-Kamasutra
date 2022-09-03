import React from "react";


function Main(){
    return(
        <main className="grid-elem main">
            <div className="img-container">
                <img className='main-img' src="https://aquadar.com/wp-content/uploads/2021/06/img_5148-3.jpg"
                     alt="pff"/>
            </div>
            <div className="profile">
                <div className="img-container">
                    <img src="https://i1.sndcdn.com/avatars-000407348541-ys6sng-t240x240.jpg" alt="profile-img"/>
                </div>
                <div className="profile-info">
                    <h2>Artem B.</h2>
                    <div>Date of birth: 1 March</div>
                    <div>City: Kyiv</div>
                    <div>education: BSU</div>
                    <div>web site : www.</div>

                </div>
            </div>
            <div className="posts">
                <p>My Posts</p>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your news"></textarea>
                <button type='button'>Send</button>
            </div>
            <div className="comments">
                <div className="comment">
                    <div className="img-container"><img src="https://images-cdn.9gag.com/photo/a31zryQ_700b.jpg" alt=""/></div>
                    <div className="comment-text">Why nobody loves me?</div>
                </div>
            </div>
        </main>
    )
}

export default Main;