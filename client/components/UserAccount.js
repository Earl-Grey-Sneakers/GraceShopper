import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import userAccount, { fetchSingleUser } from "../store/userAccount";

const UserAccount = () => {

    let { userAccount } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSingleUser())
    }, [] )

    const { id, username, email } = userAccount[0] || {}

    return (
        <div>
            <p>Welcome to your Account Page, {username} </p>
            <p>email: {email}</p>
            <p>Account Number: {id}</p>

        </div>
        
    )
}


// 


//if logged in (gateKeeping needed to make) and is not admin then obtain userdata with matching userID

//ADMIN SHOULD BE ABLE TO SEE ALL USERS


export default UserAccount