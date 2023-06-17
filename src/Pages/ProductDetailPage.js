import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductDetail from '../features/product-list/Components/ProductDetails'
function ProductDetailPage() {
  return (
    <div>
        <Navbar>
            <ProductDetail />
        </Navbar>
    </div>
  )
}

export default ProductDetailPage