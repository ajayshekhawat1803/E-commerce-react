import React from 'react'
import './Cart.css'
import ProductCard from './ProductCard'
const Cart = (props) => {
  return (
    <div id='cart'>
      <h1 id='cartheading'>Products in Cart</h1>
      <div id="cartContainer">
        {
          props.data.length>0 ?
          (props.data ?
            props.data.map((data) => {
              return <ProductCard title={data.title} image={data.image} id={data.id} key={data.id} btndata="Remove"
              />
            })
            : ''
          ):
          <h4 id='noproducts'>No Products In Cart</h4>
        }
      </div>
    </div>
  )
}

export default Cart
