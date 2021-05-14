module.exports = {

  getAll: async (req,res) => {
    console.log('getAll server ping')
    const foundProduct = await req.app.get('db').get_product();
    console.log('retunrning data:')
    console.log(foundProduct)
    return res.status(200).send(foundProduct);
  },

  getAllFromCart: async (req,res) => {
    console.log('getAll server ping')
    const foundProduct = await req.app.get('db').get_cart();
    console.log('retunrning data:')
    console.log(foundProduct)
    return res.status(200).send(foundProduct);
  },


  addProduct: async (req,res) =>{
    const {product_name, product_number, description, product_image, price, stock_number, in_stock} = req.body;
    const addProduct = await req.app.put('db').add_product([product_name, product_number, description, product_image, price, stock_number, in_stock])
    console.log(addProduct)
    return res.status(201).send(req.session.product);
  },


  addToCart: async (req,res) =>{
    console.log('add to cart server ping')
    const {user_id, product_id} = req.body;
    const foundCart = await req.app.post('db').add_to_cart([user_id, product_id]);


  },


  removeFromCart: async (req,res) =>{

  },


  addToWishlist: async (req,res) =>{

  },


  removeFromWishlist: async (req,res) =>{

  },

  checkout: async (req,res) =>{

  },


  saveCartToWishlist: async (req,res) =>{
    
  }
}