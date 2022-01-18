import { useReferenceManyFieldController } from "ra-core";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAdmins } from "../store/admin";
import { fetchStyles } from '../store/styles'


const ItemTable = () => {
    const styles = useSelector((state) => {
        return state.styles;
        }) || []

        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(fetchStyles())
        }, []);

    return (
    <>
        {styles.map((style, idx) => (
        <>
            <tr key={idx}>
                <td>{style.shoeName}</td>
                <td>{style.price}</td>
            </tr>
        </>
        ))}
    </>
    )
}

const UsersTable = () => {

}
const AdminUser = () => {
    const [activeTab, setActiveTab] = useState("items")
    
const admin = useSelector((state) => {
    return state.admin
})
const dispatch = useDispatch()
useEffect(() => {
    dispatch(fetchAllAdmins())
})
    return (
        <div className='divBelownavbar'>
            {/* <h1>Account Overview</h1>
            {admin.map((user, idx) => (
            <>
                <h3>Welcome to your Account Page, {user.username} </h3>
                <h3>Email Address: {user.email}</h3>
                <h4>Account Number: {user.id}</h4>
            </> 
            ))} */}
            
            <ul className="Nav">
                <li className={activeTab === "items" ? "active": ""}>Items</li>
                <li className={activeTab === "users" ? "active": ""}>Users</li>
            </ul>
            
            <div className='overviewTable'>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                    <ItemTable />
                </table>
            </div>
        </div>
        
    )
}


export default AdminUser