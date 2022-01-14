import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { _fetchSingleStyle } from '../store/singleStyle';
import { addToCart } from '../store/cart';

const SingleStyle = (props) => {
  const name = props.match.params.name;

  const [id, setId] = useState(Infinity);

  const { singleStyleReducer, auth } = useSelector((state) => {
    return state;
  });
  const userId = auth.id || Infinity;
  const singleStyle = singleStyleReducer || [];
  const dispatch = useDispatch();
  const { brand, shoeName, imageUrl, quantity } = singleStyle[0] || [];

  useEffect(() => {
    dispatch(_fetchSingleStyle(name));
  }, []);

  return (
    <div className="divBelowNavbar">
      <div className="single-style-wrapper">
        <div className="single-shoe">
          <img src={imageUrl} />
        </div>
        <h1>{shoeName}</h1>
        <h2>{brand}</h2>

        <h3>Size:</h3>
        {singleStyle.map((element) => (
          <div key={element.id} className="shoe-sizes">
            <button onClick={() => setId(`${element.id}`)} className="single-shoe-size">
              {element.size}
            </button>
          </div>
        ))}
        <span>
          <button className="button-30" onClick={() => dispatch(addToCart(id, userId))}>
            Add To Cart
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleStyle;
