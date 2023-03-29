const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW';



let initialState = {
    users: [
        {
            fullName: 'Dmitriy k',
            id: 1,
            status: 'looking for a job',
            location: {country: 'Belarus', city: 'Minsk'},
            followed: true,
            avatarSrc: 'https://assets.gq.ru/photos/5d9f5b37590ee50009c97b23/4:3/w_889,h_667,c_limit/anons.jpg'
        },
        {
            fullName: 'Artem B',
            id: 2,
            status: 'looking for a job',
            location: {country: 'Ukraine', city: 'Kiev'},
            followed: false,
            avatarSrc: 'https://assets.gq.ru/photos/5d9f5b37590ee50009c97b23/4:3/w_889,h_667,c_limit/anons.jpg'
        }]

}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u)=>{
                    if(u.id===action.id){
                        return {...u,followed:!u.followed}
                    }
                    return u;

                })

            }

        default:
            return state;
    }
}

export let followAC = (id) => ({type: FOLLOW,id:id});
// export let unFollowAC = (id) => ({type: UNFOLLOW,id:id});


export default usersReducer;