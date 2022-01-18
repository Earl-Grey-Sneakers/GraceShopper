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

export const findOrMakeCart = (itemId, userId, UUID) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/cart`, { itemId, userId, UUID });
      if (userId==0){
        localStorage.setItem('UUID', data.UUID)
      }
      dispatch(updateQuantities(data.id, data.UUID, userId, itemId, 'inc'))
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCart = (userId,UUID) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cart/${userId}/${UUID}`);
      dispatch(fetchedCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeCartItem = (cartId, itemId, userId, UUID) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/cart/${itemId}/${UUID}`);
      const quantityToRemove = data.styles[0].orderItems.quantity
      dispatch(updateQuantities(cartId, UUID, userId, itemId, 'remove', quantityToRemove))
    } catch (error) {
      console.log(error);
    }
  };
};

export const checkout = (UUID) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/cart/${UUID}`);
      dispatch(clearCart());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateQuantities = (cartId, UUID, userId, itemId, op, multi=1) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/cart`, {cartId, UUID, itemId, op, multi})
      dispatch(fetchCart(userId,UUID));
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
