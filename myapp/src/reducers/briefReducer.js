import { FETCH_PRODUCTS, NEW_BRIEF, FETCH_BRIEFS } from '../actions/types';

const initialState = {
  products: [],
  briefs: [],
  brief: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case NEW_BRIEF:
      return {
        ...state,
        brief: action.payload
      };
    case FETCH_BRIEFS:
      return {
        ...state,
        briefs: action.payload
      };
    default:
      return state;
  }
}
