import axios from 'axios';
const initialState = {
  productList:[],
  cart:[],
  cartDisplay:[],
  wishList:[],
  wishlistDisplay:[],
  cartNumber:null,
  totalPrice: 0

}

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST'
const ADD_PRODUCT = 'ADD_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART_LIST = 'GET_CART_LIST'
const GET_CART_NUM = 'GET_CART_NUM'
const REMOVE_CART = 'REMOVE_CART'
const CHECKOUT = 'CHECKOUT'


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
  console.log(product_name)
  axios.put('/api/products', {
    product_name,
    product_number,
    description,
    product_image,
    price,
    stock_number,
    in_stock
  })
  .then(res => res.data)
  .catch(err => console.log(err))
  const newProduct = {product_name, product_number, description, product_image, price, stock_number, in_stock}
  return{
    type: ADD_PRODUCT,
    payload: this.cartDisplay.push(newProduct)
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

export const removeFromCart = (id, key, cartList) =>{
  console.log(`product removed from cart`)
  axios.post('/api/cartRemove', {id})
  .then(res => res.data)
  .catch(err => alert(`removal error: ${err}`))
  // getCartList(this.state.user_id);
  // console.log(this.state)  
  // console.log(this.props)
  console.log(cartList)
  const cart = cartList.splice(key,1);
  console.log(cartList)
  // const data = {cart};
  console.log(cart)
  return{
    type: REMOVE_CART,
    payload: cartList
  }
  
}

export const removeFromWishlist = () =>{
  console.log(`product removed from wishlist`)
}

export const checkout = (id) =>{
  console.log(`product purchased`)
  console.log(id)
  axios.post('/api/checkout', {id})
  .then(res => res.data)
  .catch(err => console.log(err))
  const cartList = []
  return{
    type: CHECKOUT,
    payload: cartList
  }
  
}

export const saveCartToWishlist = () =>{
  console.log(`cart items moved to wishlist`)
  
}



export default function reducer(state = initialState, action) {
  console.log(action.type)
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

                    // case REMOVE_CART + "_PENDING" :
                    // console.log('remove pending')
                    // console.log(action.payload)
                    // return{...state}

                    // case REMOVE_CART + "_FULFILLED" :
                    //   console.log('remove fulfilled')
                    //   console.log(action.payload)
                    //   return{...state, cartDisplay: action.payload}

                      case REMOVE_CART :
                      console.log('we cheated')
                      console.log(action.payload)
                      return{...state, cartDisplay: action.payload}

                      // case CHECKOUT + "_PENDING" :
                      //   console.log('checkout pending')
                      //   console.log(action.payload)
                      //   return{...state}
    
                        // case CHECKOUT + "_FULFILLED" :
                        //   console.log('Checkout fulfilled')
                        //   alert('checkout sucsessful')
                        //   // console.log(action.payload)
                        //   return{state: action.payload}

                        case CHECKOUT :
                          console.log('we cheated again')
                          console.log(action.payload)
                          alert('Purchase Sucessful')
                          return{...state, cartDisplay: action.payload}

                          case ADD_PRODUCT + 'FULFILLED':
                            alert('ADD Sucessful')
                            return{...state, cartDisplay: action.payload}

    default:
        return state;
  }
}