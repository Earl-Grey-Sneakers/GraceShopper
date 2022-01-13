import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchSingleUser } from "../store/userAccount";
import { bindActionCreators } from "redux";

const UserAccount = () => {
    const state = useSelector( (state) => state )
    const dispatch = useDispatch()
    console.log(state, 'state')

    let data = useEffect(() => {
        dispatch(fetchSingleUser())
    }, [])
    
    console.log(data, 'data')

    return (
        <div className="divBelowNavbar">
            <p>Welcome to your Account Page, </p>

        </div>
        
    )
}





//if logged in (gateKeeping needed to make) and is not admin then obtain userdata with matching userID

//ADMIN SHOULD BE ABLE TO SEE ALL USERS


export default UserAccount