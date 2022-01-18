import axios from 'axios';
const FETCH_STYLE = 'FETCH_STYLE';
const GOT_STYLES = 'GOT_STYLES';

const fetchedStyle = (style) => {
  return {
    type: FETCH_STYLE,
    style,
  };
};

const fetchedStyles = (styles) => {
  return {
    type: GOT_STYLES,
    styles,
  };
};

export const fetchStyles = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/admin');
      dispatch(gotStyles(data));
    } catch (error) {
      console.log('uh oh something went wrong fetching products.', error);
    }
  };
};

export const fetchStyle = (id) => {
  return async (dispatch) => {
    try {
      const { data: style } = await axios.get(`/api/admin/${id}`);
      dispatch(setSingleStyle(style));
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
      history.push('/inventory');
    } catch (error) {
      console.log('Error occured in updating single style.', error);
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
