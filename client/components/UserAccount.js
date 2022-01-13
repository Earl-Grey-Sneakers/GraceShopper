import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import userAccount, { fetchAllUsers } from "../store/userAccount";

const UserAccount = () => {


    let { userAccount } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [] )

    const { id, username, email } = userAccount[0] || {}

    return (
        <div className="divBelowNavbar">
            <h1>Account Overview</h1>
            <h3>Welcome to your Account Page, {username} </h3>
            <h3>Email Address: {email}</h3>
            <h4>Account Number: {id}</h4>
        </div>
        
    )
}


// 


//if logged in (gateKeeping needed to make) and is not admin then obtain userdata with matching userID

//ADMIN SHOULD BE ABLE TO SEE ALL USERS


export default UserAccount