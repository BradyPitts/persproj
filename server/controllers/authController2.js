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
    const authenticatedUser = {isAdmin: user.admin, email: user.email, id: user.id};
    return res.status(201).send({loggedIn: true, authenticatedUser});
  },


  login: async (req,res) =>{
    const {email, password} = req.body;
    const foundUser = await req.app.get('db').get_user([email]);

    const user = foundUser[0];
    if (!user){
      return res.status(401).send('User not found');
    }
    const isAuthenticated = bcrypt.compareSync(password, user.hash);
    if (!isAuthenticated){
      return res.status(403).send('Wrong password');
    }
    const {authenticatedUser} = {isAdmin:user.admin, id: user.id, username: user.username};
    req.session.user = authenticatedUser
    return res.status(200).send({loggedIn: true, authenticatedUser});
  },

  logout: (req,res) =>{
    req.session.destroy();
    return res.sendStatus(200);
  },

  userData: async (req, res) => {
    console.log("inuser")
    const { user } = req.session
      console.log("req.session")
      console.log(req.session)
    if (user) return res.status(200).send({ loggedIn: true, user });
    else return res.sendStatus(401)
  }

}