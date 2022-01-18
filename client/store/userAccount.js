import axios from 'axios'

//ACTION TYPE
const GET_ALL_USERS = 'GET_ALL_USERS'

//ACTION CREATOR
const gotAllUsers = (users) => {
    return {
        type: GET_ALL_USERS,
        users
    }
};


//TODO: WILL NEED TO REFACTOR FOR ALL USERS AND SINGLE USERS
//MIDDLEWARE
export const fetchAllUsers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/api/users')
            console.log(data, 'data')
            dispatch(gotAllUsers(data))
        } catch (error) {
            console.error('unable to fetch user', error)
        }
    }
}


//REDUCER
export default (state = [], action) => {
    switch(action.type) {
        case GET_ALL_USERS:
            return action.users
        default:
            return state
    }
}

