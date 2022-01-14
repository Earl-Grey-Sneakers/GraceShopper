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

export const findOrMakeCart = (itemId, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/cart`, { itemId, userId });
      dispatch(updateQuantities(data.id,itemId,userId,'inc'))
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

export const removeCartItem = (itemId, userId, cartId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/cart/${userId}/${itemId}`);
      const quantityToRemove = data.styles[0].orderItems.quantity
      dispatch(updateQuantities(cartId, itemId, userId, 'remove', quantityToRemove))
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

export const updateQuantities = (cartId, itemId, userId, op, multi=1) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/cart`, {cartId, itemId, op, multi})
      dispatch(fetchCart(userId));
    } catch (error) {
      console.log(error)
    }
  }
}

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case GOT_CART:
      return action.cart;
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
}
