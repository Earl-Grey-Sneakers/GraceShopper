import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';

export const addedToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item,
  };
};

export const addToCart = (itemId, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/carts`, { itemId, userId });

      dispatch(addedToCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.item];
    default:
      return state;
  }
}
