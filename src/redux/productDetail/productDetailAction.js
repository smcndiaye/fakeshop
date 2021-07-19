export const SELECTED_PRODUCT = 'SELECTED_PRODUCT';
export const REMOVE_SELECTED_PRODUCT = 'REMOVE_SELECTED_PRODUCT';
const productDetailAction = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product
  }
}

export const removeProductDetailAction = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT
  }
}

export default productDetailAction;