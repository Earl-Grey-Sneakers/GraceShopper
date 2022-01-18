import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { _fetchSingleStyle } from '../store/singleStyle';
import { findOrMakeCart } from '../store/cart';

const SingleStyle = (props) => {
  const name = props.match.params.name;

  const [itemId, setId] = useState(Infinity);

  const { singleStyleReducer, auth, cart } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const userId = auth.id || 0;
  let UUID = cart.UUID || 'empty'
  if (userId==0 && UUID=='empty' && localStorage.UUID!==undefined){
    UUID = localStorage.getItem('UUID')
  }
  const singleStyle = singleStyleReducer || [];
  const { brand, shoeName, imageUrl } = singleStyle[0] || [];

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
          <button className="button-30" onClick={() => {
            if(itemId!==Infinity){
            dispatch(findOrMakeCart(itemId, userId, UUID))
            setId(Infinity)
            }
          }}>
            Add To Cart
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleStyle;
