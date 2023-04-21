const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    userData: [
        {name: 'pasha', id: 2, messages: ['pasha', 'bye', 'bye my enemy', 'go play dota']},
        {name: 'misha', id: 1, messages: ['misha', 'Hello', 'Hello my friend', 'go play cs']},
        {name: 'sasha', id: 3, messages: ['sasha', 'pidor', 'bye my enemy', 'go play dota']},
        {name: 'igor', id: 4, messages: ['igor', 'vafel', 'bye my enemy', 'go play dota']},
        {name: 'stew', id: 5, messages: ['stew', 'tratata', 'bye my enemy', 'go play dota']}
    ],


}

function dialogsPageReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_MESSAGE: {
            let copyState = {...state};
            copyState.userData[0].messages.push(action.message)
            return copyState;
        }

        default:
            return state;
    }
}


export let addMessageActionCreate = (message) => ({type: ADD_MESSAGE, message: message});

export default dialogsPageReducer;