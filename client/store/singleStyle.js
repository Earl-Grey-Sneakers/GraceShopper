import axios from 'axios';
import { fetchStyles } from './styles';

const FETCH_SINGLE_STYLE = 'FETCH_SINGLE_STYLE';

const setSingleStyle = (singleStyle) => {
  return {
    type: FETCH_SINGLE_STYLE,
    singleStyle,
  };
};

export const _fetchSingleStyle = (name) => {
  return async (dispatch) => {
    try {
      const { data: singleStyle } = await axios.get(`/api/styles/${name}`);
      dispatch(setSingleStyle(singleStyle));
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateStyle = (item, history) => {
  return async (dispatch) => {
    try {
      console.log(item);
      await axios.put(`/api/styles/${item.id}`, item);
      dispatch(fetchStyles());
      history.push('/inventory');
    } catch (error) {
      console.log('Error occured in updating single style.', error);
    }
  };
};

export default function singleStyleReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_STYLE:
      return action.singleStyle;
    default:
      return state;
  }
}
