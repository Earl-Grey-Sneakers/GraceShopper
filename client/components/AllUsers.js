import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userAccount, { fetchAllUsers } from '../store/userAccount';

const AllUsers = () => {
  let { userAccount } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const users = userAccount || {};

  return (
    <div className="divBelowNavbar">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>username, {user.username} </h3>
            <h3>Email Address: {user.email}</h3>
            <h4>Account Number: {user.id}</h4>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

//

//if logged in (gateKeeping needed to make) and is not admin then obtain userdata with matching userID

//ADMIN SHOULD BE ABLE TO SEE ALL USERS

export default AllUsers;
