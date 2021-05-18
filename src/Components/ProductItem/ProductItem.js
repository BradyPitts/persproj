import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addToCart, getProductList} from '../../redux/productsReducer';
import './ProductItem.css';

class ProductItem extends Component{
 

  componentDidMount(){
    this.props.getProductList();
    // this.props.requsetUserData();
  }

  
  render(){
    const {productList} = this.props.products;
    console.log('user data');
    console.log(this.props.user);
    const display = productList.map((products) =>(
      <div className='item-display'>
        <img src={products.product_image}  alt={products.product_number}/>
        <ul>
          <li>{products.product_name}</li>
          <li>{products.product_number}</li>
          <li>{products.description} * Baby Not Included</li>
          <li>${products.price}</li>
          <li>stock: {products.stock_number}</li>
          <li>{products.in_stock}</li>
        </ul>
        <button onClick={() => this.props.addToCart(this.props.user.user_id, products.product_id)} >Add to Cart</button>
      </div>
    ))
    return(
      <div id='product-arangement'>

        <h3>products</h3>

        {/* <Link>View Cart</Link> */}
        
        {display}
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    products: state.products,
    user: state.user
    
  }
}

export default connect(mapStateToProps, {addToCart, getProductList}) (ProductItem)