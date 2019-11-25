import { FETCH_PRODUCTS, NEW_BRIEF, FETCH_BRIEFS, FIND_PRODUCT_BY_ID } from './types';
import axios from 'axios';


export const fetchProducts = () => dispatch => {
  axios.get('http://localhost:3000/products')
    .then(products =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      })
    );
};

export const fetchBriefs =  () => dispatch => {
  axios.get('http://localhost:3000/briefs')
    .then(briefs =>
      dispatch({
        type: FETCH_BRIEFS,
        payload: briefs
      })
    );
};



export const createBrief = postData => dispatch => {
  console.log("createBrief hhhhhhhhhhhhh");
  axios.post('http://localhost:3000/briefs', {postData} )

    .then(brief =>
      dispatch({
        type: NEW_BRIEF,
        payload: brief
      })
    );
};


export const findproduct = (id) => dispatch => {
  axios.get('http://localhost:3000/products?'+id)
    .then(product =>
      dispatch({
        type: FIND_PRODUCT_BY_ID,
        payload: product
      })
    );
};
