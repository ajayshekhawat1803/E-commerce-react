import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
    return (
        <div className='card'>
            <div className='img-cont'>
                <img src={props.image} alt={props.title}></img>
            </div>
            <a href='/'>{props.title}</a>
            <button onClick={() => {
                props.setCartdata([...props.cartdata , props.data])
            }}>{props.btndata}</button>
        </div>
    )
}

export default ProductCard
