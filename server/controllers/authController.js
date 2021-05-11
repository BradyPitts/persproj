const bcrypt = require('bcryptjs');

module.exports ={
  
  signUp: async (req,res) =>{
    const {email, password, admin} = req.body;
    console.log('signUp server ping');
    console.log(req.body);
    const db = req.app.get('db');
    const result = await db.get_user([email]);
    const existingUser = result[0];
    if (existingUser){
      return res.status(409).send(`Account already exists with eamil ${email}`);
    };
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt);
    const registeredUser = await db.sign_up_user([email, hash, admin]);
    console.log(registeredUser)
    const user = registeredUser[0];
    req.session.user = {isAdmin: user.is_admin, email: user.email, id: user.id};
    return res.status(201).send(req.session.user);


  },


  login: async (req,res) =>{

  },

  logout: (req,res) =>{

  }

}