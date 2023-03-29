const ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT',
    RERENDER = "RERENDER"

let initialState = {
    userData: [
        {name: 'misha', id: 1, messages: ['Hello', 'Hello my friend', 'go play cs']},
        {name: 'pasha', id: 2, messages: ['bye', 'bye my enemy', 'go play dota']},
        {name: 'sasha', id: 3, messages: ['pidor', 'bye my enemy', 'go play dota']},
        {name: 'igor', id: 4, messages: ['vafel', 'bye my enemy', 'go play dota']},
        {name: 'stew', id: 5, messages: ['tratata', 'bye my enemy', 'go play dota']}
    ],
    newMessageText: '',
    messagesArr: ['Hello', 'Hello my friend', 'go play cs']

}

function dialogsPageReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesArr: [...state.messagesArr, state.newMessageText],
                newMessageText: ''
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        case RERENDER:
            return {
                ...state

            }
        default:
            return state;
    }
}

export let rerenderAC = () => ({type: RERENDER})
export let addMessageActionCreate = () => ({type: ADD_MESSAGE});
export let updateMessageTextActionCreate = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessageText: text
})

export default dialogsPageReducer;