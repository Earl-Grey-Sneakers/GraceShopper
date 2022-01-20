import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStyles } from '../store/styles';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const styles =
    useSelector((state) => {
      return state.styles;
    }) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStyles());
  }, []);

  const randomStyles = [];
  let style = {};
  if (styles.length > 0) {
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * styles.length);
      randomStyles.push(styles[num]);
      styles.splice(num, 1);
    }
    let num = Math.floor(Math.random() * styles.length);
    style = styles[num];
  }

  if (style.shoeName === undefined) {
    return (
      <div>
        <h1>Loading Please wait!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div className="featuredShoe">
          <Link to={`/styles`}>
            <img
              id="featured-shoe"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e18eff98646599.5ee0e8006d22c.jpg"
            />
            <div className="image-txt">JUST DON'T </div>
            <div className="image-txt-2">DO IT</div>
            <button className="image-btn button-2 ">Learn More</button>
          </Link>
        </div>
        <div className="brands">
          <Link
            to={{
              pathname: '/styles',
              state: { brand: 'Nike' },
            }}
          >
            <img
              className="circle nike"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAACpCAMAAACrt4DfAAAAdVBMVEURERH///8AAAAODg4LCwsGBgbU1NTw8PCioqLr6+vj4+P6+voICAhJSUmnp6dFRUW0tLSSkpJSUlKCgoI2NjbDw8NxcXHY2NjPz89ra2sXFxd5eXkiIiL19fU9PT29vb1fX18nJyd/f3+Li4tcXFyQkJAvLy/l3P87AAACiklEQVR4nO3ZiZKqMBCFYdKAgCgK7svVcX3/R7wE3BBch6qh4P8eIGVOpTtNNAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBir/CU7nfLXrADplpuVKSJRNC91zWoQ1zBLW0zHZAzWQWSXtmR1iBtKOSvpmKyfwPPdpdQyqa2SMg6VHefUDVtKTRZxYCUsWDkSqeDXh0ofp+Fg5Cil1j0pJfnqkY2vhr8qFh2TjPteHJNywrmUVMyVY4qn2t9vztRVt3fbKjEZ17TyEjJSX9dfJ46pF079NKek8sr9cZUiu3iP4y92qKvuuF07p5iUV+PKS0hPb3P1aavSzWnWb6uL1qzOlafpRhVbfrDLpDlF7kTd6K/qeuddSaB36s/fjcrSI8Hu0pxUeudJvSsvkZafUpt3okqa02LtqYzWuP4HSpNTGXVfnoqkOQVtdadf7zvvSn5OO37+BdhJv1f8+5yc0GpIUHFU51PyeATVzem4G+ViiqfN2t95Ny6HSqlFUVa6OS1P3yuNrbyUTK9bH95vXDenfb45JWo/bd6zlje796Ob56X0MWVaUHVa/afNHBlkS2ooZ8PB6F9xTM2YNnP0d3K2rkaB6wajSWFEp8qTWr5tvmCK8ziTh5XXuAOlWZvPgmrYnXfr/FHzFudgNDaoOKr9R5XXsDsvQ6L3cvL1nffXP/Zv2cN3gvJCo4l3XpYpD2eni2nDK+8sN1fda+S0Weh5s2rotPmArJ9WHgfq6vQfRA53Xp5tFjyyTLZUXoGOuNmcWocllVfMFOOQvkv5ztSdCbPBE/rxfLlaHZOHKs7TK5ZtW6QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4MZ/CngV76LAlSkAAAAASUVORK5CYII="
            />
          </Link>
          <Link
            to={{
              pathname: '/styles',
              state: { brand: 'Yeezy' },
            }}
          >
            <img
              className="circle"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAACIiIgeHh7y8vKvr69WVlYuLi6Xl5fa2trW1tZ0dHQnJyfi4uJoaGjj4+PMzMz5+fmenp4dHR3p6enGxsZgYGB+fn5paWnAwMClpaU7OzsxMTG1tbWNjY1OTk5HR0cRERF5eXlAQEAWFhaipMM/AAAE80lEQVR4nO2aa1fiMBRFEfCFIqIM4gtE+f+/cRbQ9p40Nw3MDB261t5+IjmGnOZxb1J6PQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICTcNkvePJqJ2Vtf1gWvfUzSEOjnNaa7fWGOe20VM5eyqJbr9NPZe3nTnxRceOI11XtvCj5vMhSWZzmtQP7ruucdlEq51bmGbTa2fbzoEn9apVvRdFlvtfVoxoe5fA+p31wPHzGnd5Ulfe7z2+mvozE71ZZFp3OYXYMK4cyNz6iPsskKwxZwXVd/Gh1y3Ny2Fta4WO90x9WV5TcWMmvmvjKqqod4RxmqTZ8Vevzr7gfol6F4rHVfFeFZ+Gwd2elte10ZTXV3vtiZaNALM2Mz8Hh3LTy8O+CPo+s4qUqlIDxoGJ/Kvxjh+sjHC6lc94C2vJg5TMrnbulvb4Vy9ge4LBa/Ac4lBF4yGmn0jlvEwxHS0ZcR7ZvpbIl/4jYHPZn48m4ZLL722FPyRzez8aVWKTjsbTce3SQBxpmJD+uc1lxwfr88tQSVl9dh14OFCIOs9oEc69rWyQZsTguk+YrUMsOa0mllW1U265DmV5vtSpLXWwtpyOfk7p9Jtpu1+FX3LESScaqOWZFg5paZnuZ6ElqMPWlLTh8jPtVIfvEV1HUlIFaVbGryMRdBspWHVpeHGWUQepW7CoSbyK1TOB9ZJCtKog3rTqU3eQ1rpVBnNflTt+schfdZYWHOUOrDm17ePeqv62TuwglJ6FprJZAMukF0XccClt0KLtDdILYMrH6bRyXUfl21JIMvASf6rl7iw7X1b+vfEEYLCWRm3jqhdUPdUTrT689h5JyuNcxwag9aTI+d9W3JriRNRwtgNYcSiceUhrZD/UkNPLVFlyfZWeNwlBrDqUT45RGdk8Z8Z+EWiKgsYlkbTmUFPMurXJPXE5k2fPhiOvJYHsOZSuYpVXeWS79Xd5NaBxXrE33CjngLxzKEC6bdE6f4yvDinUkdho3h+9XLnqLbS3NPemqfvW1XJVVEr13yngy7ZHVWtLwPJ4isTM/smd8WTX5M37Y9mODMjFV469oWjzRJby3xLMOJZ9owaGu1z3DhHBHvyb2dulzczir6Ro23ljtpgZnNkujC6yGjXfLIhC76e7ZORwFMj9hM25VHL/0OMhhy7M0SN2SCZshd+KJ1OD8HGoy5p4jU98RJ2yHOVyY9liHbuJY4B6I9shLq2TCZlikTcTYrENZvVmHtZPq0Esc99SPqX6XnNucCNtrEmcyyUunQwfN8zRr87Rx6No2YOtq3aAUbPfwzvZ1bO/NO8w29kd5qfNmPYPtps3BcM//d2gHonVevKNjDp3L6Rwdc3hx/P90y2HijVcjnXLYdAeWpFMO5V1E/XScpksOk284G+mSQ3kTkU2hjQ45bHiZ0ESHHMrxNPHtLt1xKKfT3EE2oDsO5eVR8h7fozMO5Wy6yKuFzjhMvljPcTKHzx/XLj9V/yS8+dLrgWXXcmpKkXimJ3OY78gBv2uze4zsD/cuUhf25+3QftlzgEEc4hCHOPwjhxYo23JoP8JpO1r8C4eH5EK36+fBlk3qNyzTr82gkY1F/N5y3ax9XttlzNNFs3YwSL6hn2+K1o45kQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACckt+fUEO80DN3sAAAAABJRU5ErkJggg=="
            />
          </Link>
          <Link
            to={{
              pathname: '/styles',
              state: { brand: 'New Balance' },
            }}
          >
            <img
              className="circle"
              src="https://www.matchnode.com/wp-content/uploads/2016/08/New-Balance-Logo-HD.jpg"
            />
          </Link>
        </div>

        <div className="random-shoes">
          {randomStyles.map((style, idx) => (
            <Link key={idx} to={`/styles/${style.shoeName}`}>
              <img className="random-sneaker" src={style.imageUrl} />
              <div className="row">
                <h3 className="column home-page-shoe">{style.shoeName}</h3>
                <h3 className="column home-page-shoe">
                  {'$'}
                  {style.price}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          <div className="column">
            <Link to={`/styles/Breds`}>
              <img
                className="on-feet-pic-left"
                src="https://images.unsplash.com/photo-1588099768512-be311242916f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </Link>
          </div>
          <div className="column">
            <Link to={`/styles/UNC Dunk`}>
              <img
                className="on-feet-pic-right"
                src="https://images.unsplash.com/photo-1533228067526-c21a6e8eaad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWRpZGFzJTIwc25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;
