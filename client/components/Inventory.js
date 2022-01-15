import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStyles } from '../store/styles';

import { Link } from 'react-router-dom';

const Inventory = () => {
  const styles =
    useSelector((state) => {
      return state.styles;
    }) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStyles());
  }, []);

  return (
    <div className="divBelowNavbar">
      <div className="wrapper">
        {styles.map((style, idx) => (
          <div className="card" key={idx}>
            <img src={style.imageUrl} className="shoe-img" />
            <Link to={`/styles/${style.shoeName}`}>
              <h3>{style.shoeName}</h3>
            </Link>

            <h5>
              {'$'}
              {style.price}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
