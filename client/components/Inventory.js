import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInventory } from '../store/admin';
import { deleteStyle } from '../store/admin';

import { Link } from 'react-router-dom';

const Inventory = () => {
  const styles =
    useSelector((state) => {
      return state.styles;
    }) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventory());
  }, [styles.length]);

  return (
    <div className="divBelowNavbar">
      <div className="wrapper">
        {styles.map((style, idx) => (
          <div className="card" key={idx}>
            <img src={style.imageUrl} className="shoe-img" />
              <h3>{style.shoeName}</h3>
            <p>{style.size}</p>

            <h5>
              {'$'}
              {style.price}
            </h5>
            <button onClick={() => dispatch(deleteStyle(style.id))}>delete</button>
          </div>
        ))}
      </div>
      <Link to="/add">
        <button>Add Styles</button>
      </Link>
    </div>
  );
};

export default Inventory;
