let rerenderEntireTree = () => {
    console.log("pp");
}

let store = {
    _state: {
        profilePage: {
            posts: [`Why nobody loves me?`, `What is this place?`],
            newPostText: ''

        },
        addPost () {
            this._state.profilePage.posts.push(this.profilePage.newPostText);
            rerenderEntireTree(this._state);
            this._state.profilePage.newPostText = '';
        },
        updatePostText(value) {
            this._state.profilePage.newPostText = value;
            rerenderEntireTree(this._state);
        },
        messagesArr: ['Hello', 'Hello my friend', 'go play cs'],
        userData: [
            {name: 'misha', id: 1},
            {name: 'pasha', id: 2},
            {name: 'sasha', id: 3},
            {name: 'igor', id: 4},
            {name: 'stew', id: 5}
        ]


    },
}
let state = {
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
    ]


}
export let subscribe = (observer) => { //pattern observer
    rerenderEntireTree = observer;
}





export default state;
