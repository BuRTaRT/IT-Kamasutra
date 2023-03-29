import React from "react";
import profilePageReducer from "./ProfilePageReducer";
import dialogsPageReducer from "./DialogsReducer";



let store = {
    _callSubscriber: () => {
    },
    _state: {

        profilePage: {
            posts: [`Why nobody loves me?`, `What is this place?`],
            newPostText: ''

        },
        dialogsPage: {
            userData: [
                {name: 'misha', id: 1, messages: ['Hello', 'Hello my friend', 'go play cs']},
                {name: 'pasha', id: 2, messages: ['bye', 'bye my enemy', 'go play dota']},
                {name: 'sasha', id: 3, messages: ['pidor', 'bye my enemy', 'go play dota']},
                {name: 'igor', id: 4, messages: ['vafel', 'bye my enemy', 'go play dota']},
                {name: 'stew', id: 5, messages: ['tratata', 'bye my enemy', 'go play dota']}
            ],
            newMessageText: '',
            messagesArr: ['Hello', 'Hello my friend', 'go play cs']

        },


    },
    getState() {
        return this._state;
    },
    subscribe(observer) { //pattern observer
        this._callSubscriber = observer;
    },
    dispatch(action) {
        profilePageReducer(this.getState().profilePage, action)
        dialogsPageReducer(this.getState().dialogsPage, action)
        this._callSubscriber(store)


    }
}

export default store;
