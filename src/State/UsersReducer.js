const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    UPDATE_USERS = "UPDATE_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE"


let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 100,
    pageSize: 5

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


        default:
            return state;
    }
}

export let followAC = (id) => ({type: FOLLOW, id: id});
// export let unFollowAC = (id) => ({type: UNFOLLOW,id:id});
export let updateUsersAC = (users) => ({
    type: UPDATE_USERS,
    users: users
})
export let setCurrentPageAC = (page) => ({
        type: SET_CURRENT_PAGE,
        page: page
    }

)


export default usersReducer;