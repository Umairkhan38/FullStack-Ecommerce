import React from 'react'
import NavBar from '../features/Navbar/Navbar'
import ProductList from '../features/product-list/ProductList'

function Home() {
  return (
    <div className='Home'>
    <NavBar>
        <ProductList />
    </NavBar>
    </div>
  )
}

export default Home