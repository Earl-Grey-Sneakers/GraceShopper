import { useReferenceManyFieldController } from "ra-core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory } from "../store/admin";
import { fetchAllUsers } from "../store/userAccount";

const ItemTable = () => {
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
            <button>Edit</button>
          </tr>
        </>
      ))}
    </>
  );
};

const UsersTable = () => {
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
};
const AdminUser = () => {
  const [activeTab, setActiveTab] = useState("items");
  const handleItemTab = () => {
    setActiveTab("items");
  };

  const handleUserTab = () => {
    setActiveTab("users");
  };

  return (
    <div className="divBelownavbar">
      <ul className="Nav">
        <li
          className={activeTab === "items" ? "active" : ""}
          onClick={handleItemTab}
        >
          Items
        </li>
        <li
          className={activeTab === "users" ? "active" : ""}
          onClick={handleUserTab}
        >
          Users
        </li>
      </ul>

      <div className="overviewTable">
        <table>{activeTab === "items" ? <ItemTable /> : <UsersTable />}</table>
      </div>
    </div>
  );
};

export default AdminUser;
