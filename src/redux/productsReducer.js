import axios from 'axios';
const initialState = {
  productList:[],
  cart:[],
  cartDisplay:[],
  wishList:[],
  wishlistDisplay:[],
  cartNumber:null

}

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST'
const ADD_PRODUCT = 'ADD_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART_LIST = 'GET_CART_LIST'
const GET_CART_NUM = 'GET_CART_NUM'
const REMOVE_CART = 'REMOVE_CART'


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

export const getCartList = (id) =>{
  console.log('getCartList envoked')
  const data = axios.post('/api/cart', {id})
  .then(res => res.data)
  .catch(err => console.log(err))
  console.log(data);
  return{
    type: GET_CART_LIST,
    payload: data
  }
}

export const getCartNumber = (user_id) =>{
  console.log('cart num envok');
  let number = axios.get('/api/number')
  .then(res => res.data)
  .catch(err => console.log(err))
  return{
    type: GET_CART_NUM,
    payload: number
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

export const removeFromCart = (id) =>{
  console.log(`product removed from cart`)
  axios.delete('/api/cart', {id})
  .then(res => res.data)
  .catch(err => alert(`removal error: ${err}`))
  getCartList(this.state.user_id);
  
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
        console.log('get products fulfilled')
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
                console.log('get cart fulfilled')
                console.log(action.payload)
                // console.log(action.payload);
                return{...state, cartDisplay: action.payload};

                case GET_CART_NUM + "_PENDING":
                  console.log('get pending')
                  return {...state};
            
                  case GET_CART_NUM + "_FULFILLED":
                    console.log('get fulfilled')
                    // console.log(action.payload);
                    return{...state, cartNumber: action.payload};

                    // case REMOVE_CART + "_FULFILLED" :
                    //   console.log('remove fulfilled')
                    //   return{...state, cartDisplay:action.payload}

    default:
        return state;
  }
}