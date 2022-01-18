import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStyles } from '../store/styles';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const styles =
    useSelector((state) => {
      return state.styles;
    }) || [];

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStyles())
    }, [])

    const randomStyles=[]
    let style={}
    if (styles.length>0) {
        for(let i=0; i<4; i++){
            let num = Math.floor(Math.random()*styles.length)
            randomStyles.push(styles[num])
            styles.splice(num,1)
        }
        let num = Math.floor(Math.random()*styles.length)
        style= styles[num]
    }

    return (
        <div className="divBelowNavbar">
            <div className="featuredShoe">
                <h3 className="featured-shoe-text">Featured Shoe</h3>
                <Link to={`/styles/${style.shoeName}`} >
                <img id="featured-shoe" src={style.imageUrl}/>
                </Link>
                <hr />
            </div>
            <div className="brands">
               <div className="circle">Nike</div>
               <div className="circle">Yeezy</div>
               <div className="circle">New Balance</div>
            </div>
            <hr />
            <div className="random-shoes">
                {randomStyles.map((style,idx) => (
                    <Link key={idx} to={`/styles/${style.shoeName}`} >
                    <img className="random-sneaker" src={style.imageUrl}/>
                    </Link>
                ))}
            </div>
            <div className="onFeet">
                <Link to={`/styles/Breds`} >
                    <img className="on-feet-pic" src='https://cms-cdn.thesolesupplier.co.uk/2020/12/bred5_w1160.jpg'/>
                </Link>
                <Link to={`/styles/UNC Dunk`} >
                    <img className="on-feet-pic" src='https://www.allaboutanthony.com/wp-content/uploads/2019/08/Air-Jordan-1-Low-Koston-Nike-SB-WDYWT-On-Feet-Blue-Laces.jpg'/>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;