import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURRE,
} from './productAction'
const initalState = {
  loading: false,
  products: [],
  error: ''
}

const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true

      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: ''

      }
    case FETCH_PRODUCT_FAILURRE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload

      }
    default:
      return state
  }
}


export default productReducer;