import React from "react";
import {addPostActionCreate, updatePostTextActionCreate} from "../../../../State/ProfilePageReducer";
import Posts from "./Posts";
import StoreContext from "../../../../StoreContext";

// let newPostElement = React.createRef();


 function PostsContainer(props) {

  return (
      <StoreContext.Consumer>
          {
              (store)=>{
                  let addNewPost = () => {
                      let action = addPostActionCreate();
                      store.dispatch(action);
                  }
                  let updateNewPostText = (e) => {
                      let text = e.target.value;
                      let action = updatePostTextActionCreate(text);
                      store.dispatch(action);
                  }


                  return <Posts  addPost={addNewPost}
                          newPostText={store.getState().profilePage.newPostText}
                          updateText={updateNewPostText}
                          posts ={store.getState().profilePage.posts} />

              }

          }

      </StoreContext.Consumer>
  )


}

export default PostsContainer;