import {rerenderEntireTree} from "../render";


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


export let addPost= function () {
    state.profilePage.posts.push(state.profilePage.newPostText);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
}
export let updatePostText= function (value) {
    state.profilePage.newPostText = value;
    rerenderEntireTree(state);
}

export default state;
