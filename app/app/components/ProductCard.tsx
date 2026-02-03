import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css';
styles.card
const ProductCard = () => {
  return (
    <div className=' text-xl p-2 ml-5 bg-sky-200 text-amber-700 hover:bg-amber-200'>
    <AddToCart/>
    </div>
  )
}

export default ProductCard