import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addToCart, addToWishlist, removeFromCart, removeFromWishlist, saveCartToWishlist, checkout, getProductList} from '../../redux/productsReducer';

class ProductItem extends Component{
  constructor(){
    super();

  }

  componentDidMount(){
    this.props.getProductList();
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
    const {productList} = this.props.products;
    const display = productList.map((products) =>(
      <div>
        <ul>
          <li>{products.product_name}</li>
          <li>{products.product_number}</li>
          <li>{products.description}</li>
          <li>{products.price}</li>
          <li>stock: {products.stock_number}</li>
          <li>{products.in_stock}</li>
        </ul>
        <button onClick={() => (this.props.addToCart(this.props.user_id, products.product_id))} >Add to Cart</button>
      </div>
    ))
    return(
      <div id='shop'>

        <h3>products</h3>
        
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

export default connect(mapStateToProps, {addToCart, addToWishlist, removeFromCart, removeFromWishlist, saveCartToWishlist, checkout, getProductList}) (ProductItem)