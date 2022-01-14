import axios from 'axios';

const GOT_CART = 'GOT_CART'
const CLEAR_CART = 'CLEAR_CART'

const fetchedCart = (cart) => {
  return {
    type: GOT_CART,
    cart,
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export const addToCart = (itemId, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/cart`, { itemId, userId });
      console.log(data)
      fetchCart(userId)
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cart/${userId}`);
      dispatch(fetchedCart(data.styles));
    } catch (error) {
      console.log(error)
    }
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case GOT_CART:
      return action.cart
    case CLEAR_CART:
      return []
    default:
      return state;
  }
}
