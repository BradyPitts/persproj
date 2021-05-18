import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addToCart, addToWishlist, removeFromCart, removeFromWishlist, saveCartToWishlist, checkout, getProductList} from '../../redux/productsReducer';
import ProductItem from '../ProductItem/ProductItem';
import './Shop.css'

class Shop extends Component{


  componentDidMount(){
    // this.props.getProductList();
  }

  render(){
    // const display = this.props.products.map;
    return(
      <div id='shop'>
        <h1>shop</h1>
          <ProductItem />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    
  }
}

export default connect(mapStateToProps, {addToCart, addToWishlist, removeFromCart, removeFromWishlist, saveCartToWishlist, checkout, getProductList}) (Shop)