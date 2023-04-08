import {usersApi} from "../myComponents/Api/Api";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    UPDATE_USERS = "UPDATE_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    TOGGLE_FETCH = "TOGGLE_FETCH",
    TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS"


let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 180,
    pageSize: 10,
    isFetching: false,
    followingInProgress: []

}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;

                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
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
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => {
                        return id !== action.userId
                    })

            }


        default:
            return state;
    }
}

export let follow = (id) => ({type: FOLLOW, id: id});
export let unfollow = (id) => ({type: UNFOLLOW, id: id});

export let updateUsers = (users) => ({
    type: UPDATE_USERS,
    users: users
})
export let setCurrentPage = (page) => ({
        type: SET_CURRENT_PAGE,
        page: page
    }

)
export let toggleFetch = (isFetching) => ({
    type: TOGGLE_FETCH,
    isFetching
})
export let toggleFollowingProgress = (isFetching, id) => (
    {
        type: TOGGLE_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: id
    }
)

export let getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(toggleFetch(true));
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setCurrentPage(currentPage));
                dispatch(updateUsers(data))
                dispatch(toggleFetch(false));
            })
    }
}
export let unfollowThunk = (id) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,id))
        usersApi.unfollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(id))
                    dispatch(toggleFollowingProgress(false, id))
                }

            })
    }
}
export let followThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,id))
        usersApi.follow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(id))
                    dispatch(toggleFollowingProgress(false, id))
                }

            })
    }
}

export default usersReducer;