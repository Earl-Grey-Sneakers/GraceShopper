import React from 'react';

const HomePage = () => {
    return (
        <div className="divBelowNavbar">
            <div className="featuredShoe">
                <h3 className="featured-shoe-text">Featured Shoe</h3>
                <img id="featured-shoe" src='https://images.stockx.com/images/Air-Jordan-6-Retro-Carmine-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1612286105'/>
                <hr />
            </div>
            <div className="brands">
               <div className="circle">Nike</div>
               <div className="circle">Yeezy</div>
               <div className="circle">New Balance</div>
            </div>
            <hr />
            <div className="random-shoes">
                <img  className="random-sneaker" src='https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606320792'/>
                <img className="random-sneaker" src='https://images.stockx.com/images/Air-Jordan-1-Retro-Bred-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606318705'/>
                <img className="random-sneaker" src='https://images.stockx.com/images/Nike-Dunk-Low-UNC-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1624468252'/>
                <img className="random-sneaker" src='https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606765288'/>
            </div>
            <div className="onFeet">
                <img className="on-feet-pic" src='https://cms-cdn.thesolesupplier.co.uk/2020/12/bred5_w1160.jpg'/>
                <img className="on-feet-pic" src='https://www.allaboutanthony.com/wp-content/uploads/2019/08/Air-Jordan-1-Low-Koston-Nike-SB-WDYWT-On-Feet-Blue-Laces.jpg'/>
            </div>
        </div>
    )
}

export default HomePage;