let rerenderEntireTree = () => {

}
let ADD_POST = 'ADD-POST',
    UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [`Why nobody loves me?`, `What is this place?`],
            newPostText: ''

        },
        messagesArr: ['Hello', 'Hello my friend', 'go play cs'],
        userData: [
            {name: 'misha', id: 1},
            {name: 'pasha', id: 2},
            {name: 'sasha', id: 3},
            {name: 'igor', id: 4},
            {name: 'stew', id: 5}
        ],


    },
    getState() {
        return this._state;
    },
    // addPost() {
    //     this._state.profilePage.posts.push(this._state.profilePage.newPostText);
    //     rerenderEntireTree(this._state);
    //     this._state.profilePage.newPostText = '';
    // },
    // updatePostText(value) {
    //     this._state.profilePage.newPostText = value;
    //     rerenderEntireTree(this._state);
    // },
    subscribe(observer) { //pattern observer
        rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.profilePage.posts.push(this._state.profilePage.newPostText);
            rerenderEntireTree(this._state);
            this._state.profilePage.newPostText = '';
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            rerenderEntireTree(this._state);
        }

    }
}
export let addPostActionCreate = () => {
    return {
        type: ADD_POST
    };
}
export let updatePostTextActionCreate = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newPostText: text
    }
}


export default store;
