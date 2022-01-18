import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStyles } from '../store/styles';

import { Link, useLocation } from 'react-router-dom';

const AllStyles = () => {
  const location = useLocation()
  const [brand, setBrand] = useState('All')
  const [color, setColor] = useState('All')

  const styles =
    useSelector((state) => {
      return state.styles;
    }) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStyles());
    if(location.state){
      setBrand(location.state.brand)
    }
  }, []);


  return (
    <div className="divBelowNavbar">
      <form>
        <label>Filter Brand:</label>
        <select onChange={(event)=>setBrand(event.target.value)}>
          <option value="All">All</option>
          <option value="Nike">Nike</option>
          <option value="Yeezy">Yeezy</option>
          <option value="New Balance">New Balance</option>
        </select>
      </form>
      <form>
        <label>Filter Color:</label>
        <select onChange={(event)=>setColor(event.target.value)}>
        <option value="All">All</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="tan">Tan</option>
        </select>
      </form>
      <div className="wrapper">
        {styles.filter(style=>style.brand===brand || brand==='All').filter(style=>style.color.includes(color) || color==='All').map((style, idx) => (
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
