import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import axios from 'axios'
import './App.css'
import Cart from './components/Cart'

const App = () => {
  const [alldata, setAlldata] = useState([])
  const [cartdata, setCartdata] = useState([])
  const [showcart, setShowCart] = useState(false)


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setAlldata(res.data)
      })
  }, [])

  return (
    <>
      <Header showcart={showcart} setShowCart={setShowCart} />
      <h1 id="heading">Our Products</h1>
      {showcart && <Cart data={cartdata}/>}
      <div id="allproducts">
        {
          alldata ?
            alldata.map((data) => {
              return <ProductCard title={data.title} image={data.image} id={data.id} key={data.id} cartdata={cartdata} setCartdata={setCartdata} data={data} btndata="Add to Cart"/>
            })
            : ''
        }
      </div>

    </>
  )
}

export default App
