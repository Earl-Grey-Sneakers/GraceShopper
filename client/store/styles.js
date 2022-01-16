import axios from 'axios';

const GOT_STYLES = 'GOT_STYLES';
const DELETE_STYLES = 'DELETE_STYLES';

const gotStyles = (styles) => {
  return {
    type: GOT_STYLES,
    styles,
  };
};

export const fetchStyles = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/styles');
      dispatch(gotStyles(data));
    } catch (error) {
      console.log('uh oh something went wrong fetching products.', error);
    }
  };
};

export const addStyle = (style) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/styles', style);
      dispatch(fetchStyles());
    } catch (error) {
      console.log('uh oh something went wrong adding products.', error);
    }
  };
};

export const deleteStyles = (itemId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`api/styles/${itemId}`);
      dispatch(fetchStyles());
    } catch (error) {
      console.log('uh oh something went wrong deleting products.', error);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case GOT_STYLES:
      return action.styles;
    default:
      return state;
  }
}
