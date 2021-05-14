import axios from 'axios';
const initialState = {
    email: null,
    admin: false

}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'


export const requestUserData = () =>{
    let data = axios.get('/auth/user-data')
        .then(res => res.data)
        .catch(err =>
            console.log(err))
    return{
        type: REQUEST_USER_DATA,
        payload: data
    }


}


export default function reducer(state = initialState, action){
    console.log("action")
    console.log(action)
    switch(action.type){
        case REQUEST_USER_DATA + "_FULFILLED":
            return {...state, email: action.payload}
        default:
            return state
    }
}