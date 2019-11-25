import { FETCH_PRODUCTS, NEW_BRIEF, FETCH_BRIEFS , FIND_PRODUCT_BY_ID} from '../actions/types';

const initialState = {
  products: [],
  briefs: [],
  brief: {},
  product:[],
  productsname:[]
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
    case FIND_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
}
