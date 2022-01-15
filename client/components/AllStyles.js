import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStyles } from '../store/styles';

import { Link } from 'react-router-dom';

const AllStyles = () => {
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
            <Link to={`/styles/${style.shoeName}`}>
              <img src={style.imageUrl} className="shoe-img" />
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

export default AllStyles;
