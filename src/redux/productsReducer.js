import axios from 'axios';
const initialState = {
  productList:[],
  cart:[],
  cartDisplay:[],
  wishList:[],
  wishlistDisplay:[]

}

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST'
const ADD_PRODUCT = 'ADD_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART_LIST = 'GET_CART_LIST'


export const getProductList = () =>{
  console.log('getProductList envoked')
  let data = axios.get('/api/products')
  .then(res => res.data)
  .catch(err => console.log(err))
  console.log(data);
  return{
    type: GET_PRODUCT_LIST,
    payload: data
  }
}

export const getCartList = () =>{
  console.log('getCartList envoked')
  let data = axios.get('/api/cart')
  .then(res => res.data)
  .catch(err => console.log(err))
  console.log(data);
  return{
    type: GET_PRODUCT_LIST,
    payload: data
  }
}


export const addProduct = (product_name, product_number, description, product_image, price, stock_number, in_stock) => {
  let data = axios.post('/api/products', {
    product_name,
    product_number,
    description,
    product_image,
    price,
    stock_number,
    in_stock
  })
  .then(res => res.data)
  return{
    type: ADD_PRODUCT,
    payload: data
  }
}


export const addToCart = (user_id, product_id) =>{
  console.log(`add to cart envoked`)
  let data = axios.post('/api/products', {user_id, product_id})
  .then(res => res.data)
  .catch(err => console.log(err));
  console.log('response recieved')
  console.log(data)
  return{
    type: ADD_TO_CART,
    payload: data
  }
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



export default function reducer(state = initialState, action) {
  console.log(action)
  switch(action.type){

    case GET_PRODUCT_LIST + "_PENDING":
      console.log('get pending')
      return {...state};

      case GET_PRODUCT_LIST + "_FULFILLED":
        console.log('get fulfilled')
        // console.log(action.payload);
        return{...state, productList: action.payload};

        case ADD_TO_CART + "_PENDING":
          console.log('add to cart pending')
          return {...state};
    
          case ADD_TO_CART + "_FULFILLED":
            console.log('add to cart fulfilled')
            // console.log(action.payload);
            return{...state, cart: action.payload};

            case GET_CART_LIST + "_PENDING":
              console.log('get pending')
              return {...state};
        
              case GET_CART_LIST + "_FULFILLED":
                console.log('get fulfilled')
                // console.log(action.payload);
                return{...state, cartDisplay: action.payload};

    default:
        return state;
  }
}