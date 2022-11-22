let rerenderEntireTree = () => {

}

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
    getState(){
        return this._state;
    },
    addPost () {
        this._state.profilePage.posts.push(this._state.profilePage.newPostText);
        rerenderEntireTree(this._state);
        this._state.profilePage.newPostText = '';
    },
    updatePostText(value) {
        this._state.profilePage.newPostText = value;
        rerenderEntireTree(this._state);
    },
    subscribe (observer)  { //pattern observer
        rerenderEntireTree = observer;
    },
    dispatch (action){
        if (action.type === "ADD-POST"){
            this._state.profilePage.posts.push(this._state.profilePage.newPostText);
            rerenderEntireTree(this._state);
            this._state.profilePage.newPostText = '';
        }
        else if(action.type === "UPDATE-POST-TEXT"){
            this._state.profilePage.newPostText = action.newPostText;
            rerenderEntireTree(this._state);
        }

    }
}






export default store;
