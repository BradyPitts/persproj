import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addToWishlist, removeFromCart, saveCartToWishlist, checkout, getCartList} from '../../redux/productsReducer';

class Wishlist extends Component{
  constructor(){
    super();

  }

  componentDidMount(){
    this.props.getCartList();
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
    const {cartList} = this.props.cart;
    const display = cartList.map((products) =>(
      <div>
        <ul>
          <li>{products.product_name}</li>
          <li>{products.product_number}</li>
          <li>{products.description}</li>
          <li>{products.price}</li>
          <li>{products.stock_number}</li>
          <li>{products.in_stock}</li>
        </ul>
        <button onClick={() => (this.props.removeFromCart())} >Add to Cart</button>
      </div>
    ))
    return(
      <div id='cart'>

        <h3>Cart</h3>
        
        {display}
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    products: state.products
    
  }
}

export default connect(mapStateToProps, {addToWishlist, removeFromCart, saveCartToWishlist, checkout, getCartList}) (Wishlist);