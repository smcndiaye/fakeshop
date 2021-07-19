import { combineReducers } from "redux";
import productReducer from "./product/productReducer";
import productDetailReducer from "./productDetail/productDetailReducer";

const rootReducer = combineReducers({
  product: productReducer,
  productDetail: productDetailReducer
})
export default rootReducer;