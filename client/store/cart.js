import axios from 'axios';

const GOT_CART = 'GOT_CART';
const CLEAR_CART = 'CLEAR_CART';

const fetchedCart = (cart) => {
  return {
    type: GOT_CART,
    cart,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const addToCart = (itemId, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/cart`, { itemId, userId });
      console.log(data)
      fetchCart(userId);
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cart/${userId}`);
      dispatch(fetchedCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeCartItem = (itemId, userId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/cart/${userId}/${itemId}`);

      dispatch(fetchCart(userId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const checkout = (cartId) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/cart/${cartId}`);
      dispatch(clearCart());
    } catch (error) {
      console.log(error);
    }
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case GOT_CART:
      return action.cart;
    case CLEAR_CART:
      return {};
    // case CHECKOUT:
    //   return state.map((order) =>
    //     order.id === action.processedOrder.id ? action.processedOrder : order
    //   );
    default:
      return state;
  }
}
