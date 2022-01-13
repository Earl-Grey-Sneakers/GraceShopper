import Axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';

export const addedToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item,
  };
};

export const addToCart = (itemId) => {
  return async (dispatch) => {
    try {
      const { data: item } = await Axios.put(`/api/cart`);
      console.log('added');
      dispatch(addedToCart(item));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.student];
    default:
      return state;
  }
}
