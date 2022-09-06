import {rerenderEntireTree} from "../render";

let state = {
    postsTextArr: [`Why nobody loves me?`, `What is this place?`],
    messagesArr: ['Hello', 'Hello my friend', 'go play cs'],
    userData: [
        {name: 'misha', id: 1},
        {name: 'pasha', id: 2},
        {name: 'sasha', id: 3},
        {name: 'igor', id: 4},
        {name: 'stew', id: 5}
    ],
    addPost : (value) => {
        state.postsTextArr.push(value);
        rerenderEntireTree(state)
    }

}


export default state;
