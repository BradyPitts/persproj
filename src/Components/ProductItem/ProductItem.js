import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addToCart, getProductList, addProduct} from '../../redux/productsReducer';
import './ProductItem.css';

class ProductItem extends Component{
 

  componentDidMount(){
    this.props.getProductList();
    // this.props.requsetUserData();
    console.log(this.props)
  }

  handleInputName(value){
    console.log(value)
    this.setState({productName:value})
  }

  handleInputNumber(value){
    console.log(value)
    this.setState({productNumber:value})
  }

  handleInputDescription(value){
    console.log(value)
    this.setState({productDescription:value})
  }

  handleInputImage(value){
    console.log(value)
    this.setState({productImage:value})
  }

  handleInputPrice(value){
    console.log(value)
    this.setState({productPrice:value})
  }

  handleInputStockNum(value){
    console.log(value)
    this.setState({productStockNum:value})
    if(value > 0){
      this.setState({productInStock:true})
    } else{this.setState({productInStock:false})}
  }


  
  render(){
    const {productList} = this.props.products;
    console.log('user data');
    console.log(this.props.user);
    console.log('product data');
    console.log(this.props);
    console.log(productList);
    const display = productList.map((products) =>(
      <div className='item-display'>
        <img src={products.product_image}  alt={products.product_number}/>
        <ul>
          <li>{products.product_name}</li>
          <li>{products.product_number}</li>
          <li>{products.description} * Baby Not Included</li>
          <li>${products.price}</li>
          <li>stock: {products.stock_number}</li>
          {/* <li>{products.in_stock}</li> */}
        </ul>
        <button onClick={() => this.props.addToCart(this.props.user.user_id, products.product_id)} >Add to Cart</button>
      </div>
    ))
    return(
      <div id='product-arangement'>

        <h3>products</h3>

        {/* <Link>View Cart</Link> */}
        
        {display}

        {this.props.user.admin ?
        <div id='new-product'>
          <input type='text' placeholder='Item Name' onChange={e => this.handleInputName(e.target.value)}/>
          <input type='text' placeholder='Item Number' onChange={e => this.handleInputNumber(e.target.value)}/>
          <input type='text' placeholder='Description' onChange={e => this.handleInputDescription(e.target.value)}/>
          <input type='text' placeholder='Item Image' onChange={e => this.handleInputImage(e.target.value)}/>
          <input type='float' placeholder='Item price' onChange={e => this.handleInputPrice(e.target.value)}/>
          <input type='int' placeholder='Stock Number' onChange={e => this.handleInputStockNum(e.target.value)}/>
          <button onClick={() => (this.props.addProduct(this.state.productName, this.state.productNumber, this.state.productDescription, this.state.productImage, this.state.productPrice, this.state.productStockNum, this.state.productInStock))}>Submit New Item</button>
        </div> 
        : null }
        
        
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

export default connect(mapStateToProps, {addToCart, getProductList, addProduct}) (ProductItem)