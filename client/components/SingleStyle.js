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
  let UUID = cart.UUID || 'empty';
  if (userId == 0 && UUID == 'empty' && localStorage.UUID !== undefined) {
    UUID = localStorage.getItem('UUID');
  }
  const singleStyle = singleStyleReducer || [];
  const { brand, shoeName, imageUrl, price } = singleStyle[0] || [];

  useEffect(() => {
    dispatch(_fetchSingleStyle(name));
  }, []);

  return (
    <div className="divBelowNavbar">
      <div className="row ">
        <div className="column single-shoe">
          <img src={imageUrl} />
        </div>
        <div className="column">
          <div className="row">
            {' '}
            <h1>{shoeName}</h1>{' '}
          </div>

          <div className="row">
            {' '}
            <h3>{brand}</h3>
          </div>
          <div className="row">
            <h3>
              {'$'}
              {price}.00
            </h3>
          </div>
          <div className="row">
            <h5>Select size</h5>
          </div>
          <div className="row">
            {singleStyle.map((element) => (
              <button key={element.id} className="shoe-sizes" onClick={() => {
                setId(`${element.id}`)
              }}>
                <div className="single-shoe-size">
                  {element.size}
                </div>
              </button>
            ))}
          </div>
          <div className="row">
            <button
              className="button-50"
              onClick={() => {
                if (itemId !== Infinity) {
                  dispatch(findOrMakeCart(itemId, userId, UUID));
                  setId(Infinity);
                }
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStyle;
