import React from 'react';
import {connect} from 'react-redux';
import {addToCart, addToWishlist, removeFromCart, removeFromWishlist, saveCartToWishlist, checkout, getProductList} from '../../redux/productsReducer';

class Shop extends Component{
  constructor(){
    super();

  }

  componentDidMount(){
    getProductList();
  }
  
  render(){
    const 
    return(
      <div id='shop'>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    
  }
}

export default connect(mapStateToProps, {addToCart, addToWishlist, removeFromCart, removeFromWishlist, saveCartToWishlist, checkout, getProductList}) (Shop)