import axios from 'axios';

const initialState = {
  user_id: null,
  email: '',
  password: '',
  admin: false
  
}


const REQUEST_USER_DATA = 'REQUEST_USER_DATA'
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const CONTINUE_AS_GUEST = 'CONTINUE_AS_GUEST'


export const requestUserData = () =>{
  let data = axios.get('/auth/user-data')
  .then(res => res.data)
  return{
    type: REQUEST_USER_DATA,
    payload: data
  }
}


export const signUp = (email, password, admin) => {
  console.log('signUp pressed')
  // const email = credentials.email;
  // const password = credentials.password;
  // const admin = credentials.admin;
  const userData = axios.post('/auth/signup', {email, password, admin})
  .then(res =>{
    console.log('signUp response')
    console.log(res.data)
  })
  .catch(err => {
    alert(`a sign up error has occured ${err}`);
    console.log(err)
  })
  return{
    type: REGISTER_USER,
    payload: userData
  }
};


export const login = (email, password) => {
  console.log(`login pressed`)
  console.log(email, password)
  let userData = axios.post('/auth/login', {email, password})
  .then(res => res.data)
  .catch(err => console.log(err))
  return{
    type: LOGIN_USER,
    payload: userData
  }
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
      console.log(action.payload)
      return {...state, user: action.payload};

      case REGISTER_USER + "_FULFILLED":
        return{...state, state:action.payload}

      case LOGIN_USER + "_FULFILLED":
        console.log(action.payload)
        return{...state, user_id:action.payload.user_id, admin:action.payload.admin}

        case LOGOUT_USER + "_FULFILLED":
          return{initialState}

    default:
    // console.log(state)
      return state
  }
}