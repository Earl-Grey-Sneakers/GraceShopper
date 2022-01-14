import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';
const GOT_CART = 'GOT_CART';
const CLEAR_CART = 'CLEAR_CART';
const CHECKOUT = 'CHECKOUT';

const addedToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item,
  };
};

const fetchedCart = (order) => {
  return {
    type: GOT_CART,
    order,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const checkedOut = (processedOrder) => {
  return {
    type: CHECKOUT,
    processedOrder,
  };
};

export const addToCart = (itemId, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/cart`, { itemId, userId });
      dispatch(addedToCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      if (Number.isFinite(userId)) {
        const { data } = await axios.get(`/api/cart/${userId}`);
        dispatch(fetchedCart(data.styles));
      }
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

export const checkout = (order, userId) => {
  return async (dispatch) => {
    try {
      console.log(order);
      const { data: processedOrder } = await axios.put(`/api/${userId}`, order);
      dispatch(checkedOut(processedOrder));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.item];
    case GOT_CART:
      return action.order;
    case CLEAR_CART:
      return [];
    case CHECKOUT:
      return state.map((order) =>
        order.id === action.processedOrder.id ? action.processedOrder : order
      );
    default:
      return state;
  }
}
