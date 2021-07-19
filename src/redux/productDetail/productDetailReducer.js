import { SELECTED_PRODUCT } from "./productDetailAction";
import { REMOVE_SELECTED_PRODUCT } from "./productDetailAction";
const initialState = {
  product: []
}

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    case REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state;
  }
}
export default productDetailReducer;

