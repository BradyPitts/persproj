import React, {Component} from 'react';
// import Background from '../shared/Background/Background'
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
                    <img id='banner' src='./images/newbanner.jpg' />

                    <Header />

                    <div id='links'>
                        <div id='homeShop'>
                            <Link to='/Shop' className='links'>
                                <h1>Visit our Store</h1>
                            </Link>

                            <Link to='/Shop' className='links'>
                                <img id='shopImg' src='./images/shop.jpg' />
                            </Link>
                        </div>

                        <h2>or</h2>

                        <div id='homeAbout' >
                            <Link to='About' className='links'>
                                <h1>Learn About Us</h1>
                            </Link>

                            <Link to='/About' className='links'>
                                <img id='aboutImg' src='./images/about.jpg' />
                            </Link>
                        </div>
                    </div>
                </div>
            </HashRouter>
        )
    }
}



export default Home