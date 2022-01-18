import axios from 'axios';

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

export default function singleStyleReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SINGLE_STYLE:
      return action.singleStyle;
    default:
      return state;
  }
}
