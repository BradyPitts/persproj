import axios from 'axios';
const initialState = {
  product_list:{}

}

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST'

export const addToCart = (product_id) =>{
  console.log(`product added to cart`)
}

export const addToWishlist = () =>{
  console.log(`product added to wishlist`)

}

export const removeFromCart = () =>{
  console.log(`product removed from cart`)
  
}

export const removeFromWishlist = () =>{
  console.log(`product removed from wishlist`)
  
}

export const checkout = () =>{
  console.log(`product purchased`)
  
}

export const saveCartToWishlist = () =>{
  console.log(`cart items moved to wishlist`)
  
}

export const getProductList = () =>{
  console.log(`product list produced`)
  
}


export default function reducer(state = initialState, action) {
  switch(action.type){

      default: return state;
  }
}