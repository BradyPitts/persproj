import axios from 'axios';

const initialState = {
  email: '',
  password: '',
  admin: false

}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'


export const requestUserData = () =>{
  let data = axios.get('/auth/user-data')
  .then(res => res.data)
  return{
    type: REQUEST_USER_DATA,
    payload: data
  }
}

export const signUp = () => {
  console.log('signUp pressed')
  const {email, password, admin} = this.state;
  axios.post('/auth/signup', {email, password, admin})
  .then(res =>{
    console.log('signUp response')
    console.log(res.data)
    this.setState({email: '', password: ''})

  })
  .catch(err => {
    alert(`a sign up error has occured ${err}`);
    console.log(err)
  })
};

export const login = () => {
  console.log(`login pressed`)
  const {email, password} = this.state;
  axios.post('/auth/login', {email, password})
  .then(res =>{
    console.log('login response')
    console.log(res.data)
    this.setState({email: '', password: ''})

  })
  .catch(err => {
    alert(`a login error has occured ${err}`);
    console.log(err)
  })
};

export const logout = () => {
  console.log('logout pressed')
  axios.delete('/auth/logout');
};

export const continueAsGuest = () => {
  console.log(`continue pressed`)

};


export default function reducer(state = initialState, action){
  switch(action.type){
    case REQUEST_USER_DATA + "_FULLFILLED":
      const {user_id, email} = action.payload.user
      return {user_id, email};
    default:
    return state
  }
}