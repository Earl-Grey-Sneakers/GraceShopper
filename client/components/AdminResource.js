import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../store/userAccount";
import { fetchInventory } from "../store/admin";
import { Link } from "react-router-dom";
import { deleteStyle } from "../store/admin";
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
    }, [inventory.length]);
    return (
      <>
        <tr>
          <td>Brand</td>  
          <td>Name</td>
          <td>Price</td>
          <td>Size</td>
          <td>Color</td>
          <td>Quantity</td>
        </tr>
        {inventory.map((item, idx) => (
          <>
            <tr key={idx}>
              <td>{item.brand}</td>
              <td>{item.shoeName}</td>
              <td>{item.price}</td>
              <td>{item.size}</td>
              <td>{item.color}</td>
              <td>{item.quantity}</td>
              <Link to={`/styles/edit/${item.id}`}><button>Edit</button></Link>
              <button onClick={() => dispatch(deleteStyle(item.id))}>delete</button>
            </tr>
          </>
        ))}
    <Link to="/add">
        <button>Add Styles</button>
    </Link>
      </>
    );
  };
  
  export const UsersTable = () => {
    const users =
      useSelector((state) => {
        return state.userAccount;
      }) || [];
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchAllUsers());
    }, []);
  
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