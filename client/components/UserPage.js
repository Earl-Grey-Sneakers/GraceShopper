import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import userAccount, { fetchAllUsers } from "../store/userAccount";


const UserPage = () => {

    const { username, id, email } = useSelector((state) => {
        return state.auth;
      });
      
    console.log(username, 'username', id, 'id')


    return (
        <div className="divBelowNavbar">
            <h1>Account Overview</h1>
            <h3>Welcome to your Account Page, {username} </h3>
            <h3>Email Address: {email}</h3>
            {/* <h4>Account Number: {id}</h4> */}
        </div>
        
    )
}

export default UserPage