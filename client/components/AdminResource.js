import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../store/userAccount";
import { fetchInventory } from "../store/admin";
import { Link } from "react-router-dom";
export const OrderTable = () => {
    return (
        <tr>
            <td>User</td>
            <td>Email Address</td>
            <td>Order History</td>
        </tr>
       

        
    )
}

export const ItemTable = () => {
    const inventory =
      useSelector((state) => {
        return state.styles;
      }) || [];
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchInventory());
    }, []);
    console.log(inventory);
    return (
      <>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Size</td>
          <td>Color</td>
          <td>Quantity</td>
        </tr>
        {inventory.map((item, idx) => (
          <>
            <tr key={idx}>
              <td>{item.shoeName}</td>
              <td>{item.price}</td>
              <td>{item.size}</td>
              <td>{item.color}</td>
              <td>{item.quantity}</td>
              <Link to={`/styles/edit/${item.id}`}><button>Edit</button></Link>
            </tr>
          </>
        ))}
      </>
    );
  };
  
  export const UsersTable = () => {
    const users =
      useSelector((state) => {
        console.log("state ----------->", state);
        return state.userAccount;
      }) || [];
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchAllUsers());
    }, []);
  
    console.log(users);
    return (
      <>
        <tr>
          <td>User</td>
          <td>Email Address</td>
          <td>Account Number:</td>
        </tr>
        {users.map((user) => {
          return (
            <>
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.id}</td>
              </tr>
            </>
          );
        })}
      </>
    );
  }