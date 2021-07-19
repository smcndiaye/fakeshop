import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../redux/product/productAction'
const Header = ({ fetchProduct }) => {
  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <div className='ui fixed menu'>
      <div className="ui container center" >
        <h1>FakeShop</h1>
      </div>

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    productData: state.product
  }
}
const mapDispatchTopProps = (dispatch) => {
  return {
    fetchProduct: () => dispatch(fetchProduct())
  }
}
export default connect(mapStateToProps, mapDispatchTopProps)(Header)
