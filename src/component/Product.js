import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  
  display:grid;
  grid-template-columns:repeat(auto-fill,200px);
`
const Product = () => {
  const products = useSelector(state => state.product.products);

  return products.map((product) => {
    const { id, image, title, price, categroy } = product;
    return (
      <Container  key={id}>
        <Link to={`/product/${id}`} >
          <div className="ui link cards">
            <div className="card">
              <div className="ui centered small image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className='meta'>{categroy} </div>
              </div>
            </div>
          </div>
        </Link>
      </Container>

    )
  })
}

export default Product
