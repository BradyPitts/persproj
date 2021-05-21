import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addToWishlist, removeFromCart, saveCartToWishlist, checkout, getCartList} from '../../redux/productsReducer';
import Header from '../Header/Header';

class Cart extends Component{


  componentDidMount(){
    console.log('get cart did mount')
    console.log(this.props.user.user_id);
    this.props.getCartList(this.props.user.user_id);
    console.log(this.props.products.cartDisplay)
    // const cartList = this.props.products.cartDisplay;
    // const totalPriceFn = cartList.map((products)=>products.price).reduce((total, price) => total + price, 0)
    // console.log(totalPriceFn)
    // this.setState({totalPrice:totalPriceFn})
    // const {productList} = this.state.products
  }

  // const saleList = props.carsList.map((carsList, i ) => (
  //   <Car 
  //     key={i}
  //     carId={carsList.id}
  //     img={carsList.img}
  //     name={carsList.name}
  //     make={carsList.make}
  //     model={carsList.model}
  //     year={carsList.year}
  //     price={carsList.price}
  //     buyCarFn = {props.buyCarFn}
  //   />
  // ));
  
  render(){
    console.log(this.props.products.cartDisplay)
    console.log(this.props.products.totalPrice)
    const cartList = this.props.products.cartDisplay;
    const totalPriceFn = cartList.map((products)=>products.price).reduce((total, price) => total + price, 0)
    const totalPrice = totalPriceFn.toFixed(2);
    console.log(cartList);
    const display = cartList.map((products, key) =>(
      <div className='item-display'>
        <img src={products.product_image} />
        <ul>
          <li>{products.product_name}</li>
          <li>{products.product_number}</li>
          <li>{products.description}</li>
          <li>{products.price}</li>
          <li>{products.stock_number}</li>
          <li>{products.in_stock}</li>
        </ul>
        <button onClick={() => (this.props.removeFromCart(products.cart_id, key, cartList))} >Remove From Cart</button>
      </div>
      
    ))
    return(
      <div id='cart'>

        <Header />

        <h1>Cart</h1>

        {this.props.user.isLoggedIn ? <div><h3>Total Cart Price: ${totalPrice}</h3>
        <button onClick={() => this.props.checkout(this.props.user.user_id)}>Checkout</button>{display}</div> : <h2>Log in to view cart</h2> }
        
        {/* {display} */}
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    products: state.products
    
  }
}

export default connect(mapStateToProps, {addToWishlist, removeFromCart, saveCartToWishlist, checkout, getCartList}) (Cart)