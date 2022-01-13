import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStyles } from '../store/styles';
import { addToCart } from '../store/cart';
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

  const cartClicked = (id) => {
    console.log('added');
    addToCart(id);
  };

  return (
    <div className="divBelowNavbar">
      <div className="all-styles-container">
        {styles.map((style, idx) => (
          <div className="all-styles-single-style" key={idx}>
            <img src={style.imageUrl} className="shoe-img" />
            <Link to={`/styles/${style.shoeName}`}>
              <h3>{style.shoeName}</h3>
            </Link>

            <h5>
              {'$'}
              {style.price}
            </h5>
            <button onClick={() => cartClicked(style.id)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStyles;
