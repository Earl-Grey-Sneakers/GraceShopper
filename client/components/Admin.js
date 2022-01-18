import React, { useState } from "react";
import { ItemTable, OrderTable, UsersTable } from "./AdminResource";


const AdminUser = () => {
  const [activeTab, setActiveTab] = useState("items");
  const handleItemTab = () => {
    setActiveTab("items");
  };

  const handleUserTab = () => {
    setActiveTab("users");
  };

  const handleOrderTab = () => {
      setActiveTab("orders")
  }
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
        <li
          className={activeTab === "orders" ? "active" : ""}
          onClick={handleOrderTab}>
          Order History    
          </li>
      </ul>

      <div className="overviewTable">
        <table>{activeTab === "items" ? <ItemTable /> 
              : activeTab === "users" ? <UsersTable /> 
              : <OrderTable />}
        </table>
      </div>
    </div>
  );
};

export default AdminUser;
