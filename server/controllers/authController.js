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
      return res.status(409).send(`Account already exists with email: ${email}`);
    };
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt);
    const registeredUser = await db.sign_up_user([email, hash, admin]);
    console.log(registeredUser)
    const user = registeredUser[0];
    // req.session.user = {isAdmin: user.admin, email: user.email, id: user.user_id};
    return res.status(201).send({isLoggedIn: true, user});
  },


  login: async (req,res) =>{
    const {email, password} = req.body;
    console.log('login server ping')
    console.log(email, password)
    const foundUser = await req.app.get('db').get_user([email]);
    const user = foundUser[0];
    if (!user){
      return res.status(401).send('User not found');
    }
    const isAuthenticated = bcrypt.compareSync(password, user.hash);
    if (!isAuthenticated){
      return res.status(403).send('Wrong password');
    }
    // req.session.user = {isAdmin:user.admin, id: user.user_id,};
    return res.status(200).send({isLoggedIn: true, user});
  },

  
  logout: (req,res) =>{
    req.session.destroy();
    return res.sendStatus(200).send({isLoggedIn: false});
  },

  userData: async (req,res) =>{
    console.log('user data server ping');
    const { user } = req.session
    console.log('req.session')
    console.log(req.session)
    if(user) return res.status(200).send({loggedIn: true, user});
    else return res.sendStatus(401);
  }

}

