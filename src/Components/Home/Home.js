import React, { Component } from 'react';
import Background from '../shared/Background/Background'
import './Home.css';
import {connect} from 'react-redux';
import {requestUserData} from '../../redux/userReducer2';
// import {requestBudgetData, addPurchase, removePurchase} from '../../redux/budgetReducer';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';



class Home extends Component {


    render() {
        return (
            <HashRouter>

            <div id='Home' >
                <img id='banner' src='./images/newbanner.jpg' alt='Wimpitts Banner' />
                <Header />

                <Link to='/Shop' className='links'>
                <h1>Visit our Store</h1>
                </Link>
                <h2>or</h2>
                <Link to='About' className='links'>
                <h1>Learn About Us</h1>
                </Link>

                <Link to='/Shop' className='links'>
                    <img id='shopImg' src='https://scontent-den4-1.xx.fbcdn.net/v/t31.18172-8/21273700_331608357266054_688289904150058855_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=ZngcXkXyJb0AX8t1vRt&_nc_ht=scontent-den4-1.xx&oh=d4433ce40a029c48689a4193304e3bb5&oe=60C8AEE1' alt='Link to Shop' />
                </Link>

                <Link to='/About' className='links'>
                    <img id='aboutImg' src='https://scontent-den4-1.xx.fbcdn.net/v/t31.18172-8/r270/21316099_331597667267123_5961621395707525658_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=wVMOU4Y-kooAX9wARls&_nc_ht=scontent-den4-1.xx&_nc_tp=31&oh=924afa4e09f671d6c3e451730c52b389&oe=60C8CDFD' alt='Link to About Us' />
                </Link>
                    
            </div>
            </HashRouter>
        )
    }
}



export default Home