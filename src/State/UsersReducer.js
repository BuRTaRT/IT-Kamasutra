const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    UPDATE_USERS = "UPDATE_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    TOGGLE_FETCH="TOGGLE_FETCH"


let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 100,
    pageSize: 5,
    isFetching:false

}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {...u, followed: !u.followed}
                    }
                    return u;

                })

            }
        case UPDATE_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOGGLE_FETCH:
            return {
                ...state,
                isFetching: action.isFetching
            }


        default:
            return state;
    }
}

export let follow = (id) => ({type: FOLLOW, id: id});
// export let unFollowAC = (id) => ({type: UNFOLLOW,id:id});
export let updateUsers = (users) => ({
    type: UPDATE_USERS,
    users: users
})
export let setCurrentPage = (page) => ({
        type: SET_CURRENT_PAGE,
        page: page
    }

)
export let toggleFetch=(isFetching)=>({
    type:TOGGLE_FETCH,
    isFetching
})


export default usersReducer;