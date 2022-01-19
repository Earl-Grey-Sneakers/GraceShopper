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
            <div className="Account Infor">
                <h1>Account Overview</h1>
                <h3>Welcome to your Account Page, {username} </h3>
                <h3>Email Address: {email}</h3>
            </div>
            <div className="latestOrder">
                <table>
                        Most Recent Order
                    <td>
                        <tr>
                            <tr>Order #:</tr>
                            <td>24987234</td>
                        </tr>
                        <tr>
                            <tr>Order Size:</tr>
                            <td>2</td>
                        </tr>
                        <tr>
                            <tr>Total Cost:</tr>
                            <td>190</td>
                        </tr>
                        <tr>
                            Billing Adress:
                            <td>
                                123 STREET
                                FAKE CITY
                                STATE
                                ZIPCODE
                            </td>
                        </tr>
                        <tr>
                            Payment Information:
                            <td>
                            Card Ending in XXXX
                            </td>
                        </tr>
                    </td>
                </table>
            </div>
           
        </div>
        
    )
}

export default UserPage