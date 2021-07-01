import React, { Component } from 'react';
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
                <img id='banner' src='https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/187899483_1136396016787280_4543918771449303346_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=6umydgVewOwAX_RQxx_&_nc_ht=scontent-lax3-2.xx&oh=0beed8ebff6a4a11580ebdd1d5760c46&oe=60E2E63A' alt='Wimpitts Banner' />

                <Header />

                <div id='links'>
                    <div id='homeShop'>
                        <Link to='/Shop' className='links'>
                        <h1>Visit our Store</h1>
                        </Link>
                        
                        <Link to='/Shop' className='links'>
                            <img id='shopImg' src='https://scontent-lax3-1.xx.fbcdn.net/v/t31.18172-8/21273700_331608357266054_688289904150058855_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=5TX5NPTg6HgAX8_V-ch&_nc_ht=scontent-lax3-1.xx&oh=1fc805428c9c3a55479e0c52e8864bc6&oe=60E26421' alt='Link to Shop' />
                        </Link>
                    </div>

                    <h2>or</h2>

                    <div id='homeAbout' >
                        <Link to='About' className='links'>
                        <h1>Learn About Us</h1>
                        </Link>

                        <Link to='/About' className='links'>
                            <img id='aboutImg' src='https://scontent-lax3-2.xx.fbcdn.net/v/t31.18172-8/21368941_331598513933705_6579325986744054702_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=at5BWBj5aUAAX_F0JbP&_nc_ht=scontent-lax3-2.xx&oh=6f16ea9d362b6a0885e76012afb34aea&oe=60E26E46' alt='Link to About Us' />
                        </Link>
                    </div>
                </div>
            </div>
            </HashRouter>
        )
    }
}



export default Home