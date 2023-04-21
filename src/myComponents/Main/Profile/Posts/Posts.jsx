import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthC, minLengthC, required} from "../../../../utils/validators";
import {FormControls} from "../../../common/formControls/formControls";


const maxLength = maxLengthC(10);
const minLength = minLengthC(3);

let Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormControls} name={"postText"}
                   typefield={'textarea'} placeholder="Your news" validate={[required, maxLength, minLength]}>
            </Field>
            <button>Send</button>
        </form>
    )
}

function Posts(props) {
    let posts = props.posts.map((item, i) => <Post key={i} message={item}/>);

    let onSubmit = (formData) => {
        props.addPost(formData.postText)
    }
    return (
        <div className={s.posts}>
            <p>My Posts</p>
            <PostsForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

let PostsForm = reduxForm({form: 'posts'})(Form)
export default Posts;