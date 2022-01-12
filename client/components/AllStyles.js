<<<<<<< HEAD
import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchStyles } from '../store/styles'

const AllStyles = () => {
    const styles = useSelector((state) => {
        return state.styles;
    }) || []
=======
import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchStyles } from '../store/styles';

const AllStyles = (props) => {
  const styles =
    useSelector((state) => {
      return state.styles;
    }) || [];
>>>>>>> main

  const dispatch = useDispatch();

<<<<<<< HEAD
    useEffect(()=>{
        dispatch(fetchStyles())
    }, [])
=======
  useEffect(() => {
    dispatch(fetchStyles());
  }, []);
>>>>>>> main

  return (
    <div className="divBelowNavbar">
      <div className="all-styles-container">
        {styles.map((style, idx) => (
          <div className="all-styles-single-style" key={idx}>
            <img src={style.imageUrl} className="shoe-img" />
            <h3>{style.shoeName}</h3>
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
