let rerenderEntireTree = () => {

}
let ADD_POST = 'ADD-POST',
    UPDATE_POST_TEXT = 'UPDATE-POST-TEXT',
    ADD_MESSAGE='ADD-MESSAGE',
    UPDATE_MESSAGE_TEXT='UPDATE-MESSAGE-TEXT';


let store = {
    _state: {

        profilePage: {
            posts: [`Why nobody loves me?`, `What is this place?`],
            newPostText: ''

        },
        messagesArr: ['Hello', 'Hello my friend', 'go play cs'],
        newMessageText:'',
        userData: [
            {name: 'misha', id: 1, messagesArr: ['Hello', 'Hello my friend', 'go play cs']},
            {name: 'pasha', id: 2, messagesArr: ['bye', 'bye my enemy', 'go play dota']},
            {name: 'sasha', id: 3,messagesArr: ['pidor', 'bye my enemy', 'go play dota']},
            {name: 'igor', id: 4,messagesArr: ['vafel', 'bye my enemy', 'go play dota']},
            {name: 'stew', id: 5,messagesArr: ['tratata', 'bye my enemy', 'go play dota']}
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

    // updateDialogMessageText(value) {
    //         this._state.newMessageText = value;
    //         rerenderEntireTree();
    //     },
    // addMessage() {
    //     this._state.messagesArr.push(this._state.newMessageText);
    //     rerenderEntireTree();
    //     this._state.newMessageText = '';
    // },
    subscribe(observer) { //pattern observer
        rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.profilePage.posts.push(this._state.profilePage.newPostText);
            rerenderEntireTree();
            this._state.profilePage.newPostText = '';
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            rerenderEntireTree();
        } else if(action.type === ADD_MESSAGE){
            this._state.messagesArr.push(this._state.newMessageText);
            rerenderEntireTree();
            this._state.newMessageText = '';
        } else if(action.type === UPDATE_MESSAGE_TEXT){
            this._state.newMessageText = action.newMessageText;
            rerenderEntireTree();
        }

    }
}
export let addMessageActionCreate=()=>({type:ADD_MESSAGE});
export let updateMessageTextActionCreate=(text)=>({
    type:UPDATE_MESSAGE_TEXT,
    newMessageText: text})
export let addPostActionCreate = () => ({type: ADD_POST});
export let updatePostTextActionCreate = (text) => ({
        type: UPDATE_POST_TEXT,
        newPostText: text

});


export default store;
