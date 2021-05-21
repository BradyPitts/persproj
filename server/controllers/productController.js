module.exports = {

  getAll: async (req,res) => {
    console.log('getAll server ping')
    const foundProduct = await req.app.get('db').get_product();
    console.log('returning products:')
    // console.log(foundProduct)
    return res.status(200).send(foundProduct);
  },

  getAllFromCart: async (req,res) => {
    console.log('getCart server ping');
    const {id} = req.body;
    console.log(id)
    const foundCart = await req.app.get('db').get_cart([id]);
    console.log('returning cart:')
    console.log(foundCart)
    return res.status(200).send(foundCart);
  },

  getCartNumber: async (req,res) =>{
    console.log('cart number server ping');
    const cartNumber = await req.app.get('db').get_cart_number([user_id]);
    return res.status(200).send(cartNumber);
  },


  addProduct: async (req,res) =>{
    const {product_name, product_number, description, product_image, price, stock_number, in_stock} = req.body;
    console.log(product_name)
    const addProduct = await req.app.get('db').add_product([product_name, product_number, description, product_image, price, stock_number, in_stock])
    console.log(addProduct)
    return res.status(200).send(req.session.product);
  },


  addToCart: async (req,res) =>{
    console.log('add to cart server ping')
    const {user_id, product_id} = req.body;
    const foundCart = await req.app.get('db').add_to_cart([user_id, product_id]);
    console.log('returning cart data')
    console.log(foundCart);
    return res.status(200).send(foundCart);

  },


  removeFromCart: async (req,res) =>{
    console.log('remove from cart server ping')
    const {id} = req.body;
    console.log(id)
    const updateCart = await req.app.get('db').remove_from_cart([id]);
    console.log('returning new cart')
    console.log(updateCart)
    return res.status(200).send(updateCart)
  },


  addToWishlist: async (req,res) =>{

  },


  removeFromWishlist: async (req,res) =>{

  },

  checkout: async (req,res) =>{
    console.log('checkout server ping');
    const {id} = req.body
    console.log(id)
    await req.app.get('db').checkout([id])
    return res.status(200).send('checkout server complete')
  },


  saveCartToWishlist: async (req,res) =>{
    
  }
}