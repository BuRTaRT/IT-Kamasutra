const ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT',
    CHANGE_DIALOG = "CHANGE_DIALOG"

let initialState = {
    userData: [
        {name: 'pasha', id: 2, messages: ['pasha', 'bye', 'bye my enemy', 'go play dota']},
        {name: 'misha', id: 1, messages: ['misha', 'Hello', 'Hello my friend', 'go play cs']},
        {name: 'sasha', id: 3, messages: ['sasha', 'pidor', 'bye my enemy', 'go play dota']},
        {name: 'igor', id: 4, messages: ['igor', 'vafel', 'bye my enemy', 'go play dota']},
        {name: 'stew', id: 5, messages: ['stew', 'tratata', 'bye my enemy', 'go play dota']}
    ],
    newMessageText: '',
    currentDialog: 1,
    currentUser:  {name: 'pasha', id: 2, messages: ['pasha', 'bye', 'bye my enemy', 'go play dota']}

}

function dialogsPageReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.userData.forEach(u => {
                return u.id === stateCopy.currentDialog && u.messages.push(stateCopy.newMessageText)
            })
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        case CHANGE_DIALOG:
            let stateCopy = {...state};
            stateCopy.currentDialog = action.currentDialog
            stateCopy.currentUser = stateCopy.userData.filter((u) => {
                return u.id === stateCopy.currentDialog;
            })[0];
            return stateCopy;


        default:
            return state;
    }
}


export let changeDialogAC = (currentDialog) => ({type: CHANGE_DIALOG, currentDialog})
export let addMessageActionCreate = () => ({type: ADD_MESSAGE});
export let updateMessageTextActionCreate = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessageText: text
})

export default dialogsPageReducer;