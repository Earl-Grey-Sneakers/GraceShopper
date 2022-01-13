import axios from 'axios'

//ACTION TYPE
const GET_SINGLE_USER = 'GET_SINGLE_USER'

//ACTION CREATOR
const gotSingleUser = (user) => {
    return {
        type: GET_SINGLE_USER,
        user
    }
};


//TODO: WILL NEED TO REFACTOR FOR ALL USERS AND SINGLE USERS
//MIDDLEWARE
export const fetchSingleUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/api/users')
            console.log(data, 'data')
            dispatch(gotSingleUser(data))
        } catch (error) {
            console.error('unable to fetch user', error)
        }
    }
}

//REDUCER 
export default (state = [], action) => {
    switch(action.type) {
        case GET_SINGLE_USER:
            return action.user
        default:
            return state
    }
}