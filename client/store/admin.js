import axios from 'axios';
import { fetchStyles } from './styles';

const FETCH_STYLE = 'FETCH_STYLE';
const GOT_STYLES = 'GOT_STYLES';

const fetchedStyle = (style) => {
  return {
    type: FETCH_STYLE,
    style,
  };
};

const fetchedInventory = (styles) => {
  return {
    type: GOT_STYLES,
    styles,
  };
};

export const addStyle = (style, history) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/admin', style);
      dispatch(fetchStyles());
      history.push('/admin');
    } catch (error) {
      console.log('uh oh something went wrong adding products.', error);
    }
  };
};

export const fetchInventory = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/admin');
      dispatch(fetchedInventory(data));
    } catch (error) {
      console.log('uh oh something went wrong fetching products.', error);
    }
  };
};

export const fetchStyle = (id) => {
  return async (dispatch) => {
    try {
      const { data: style } = await axios.get(`/api/admin/${id}`);
      dispatch(fetchedStyle(style));
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateStyle = (item, history) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/admin/${item.id}`, item);
      dispatch(fetchStyle(item.id));
      history.push('/admin');
    } catch (error) {
      console.log('Error occured in updating single style.', error);
    }
  };
};

export const deleteStyle = (itemId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`api/styles/${itemId}`);
      dispatch(fetchStyles());
    } catch (error) {
      console.log('uh oh something went wrong deleting products.', error);
    }
  };
};

export default function adminReducer(state = [], action) {
  switch (action.type) {
    case GOT_STYLES:
      return action.styles;
    case FETCH_STYLE:
      return action.style;
    default:
      return state;
  }
}
