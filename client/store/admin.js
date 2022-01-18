import axios from "axios";

const GET_ALL_ADMINS = "GET_ALL_ADMINS";

const gotAdmin = (admin) => {
    return {
        type: GET_ALL_ADMINS,
        admin
    }
}

export const fetchAllAdmins = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/admin/`)
            console.log(data)
            if(data.isAdmin === true) {
               dispatch(gotAdmin(data)) 
            } else {
                return undefined
            }  
        } catch (error) {
            console.error('unable to fetch admin', error)
        }
    }
}

export default function adminReducer (state = [], action) {
    switch(action.type) {
        case GET_ALL_ADMINS:
            return action.admin
        default: 
            return state
    }
}