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
                <img id='banner' src='https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/188162557_1136401500120065_7835355315055070718_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_ohc=Xw8UrbmM9YkAX-ZUg45&tn=KnPIx8HPyDc3rGaz&_nc_ht=scontent-lax3-1.xx&oh=df9cacff6d85deaf08ee1f886f781702&oe=60DA9D3E' alt='Wimpitts Banner' />

                <Header />

                <div id='links'>
                    <div id='homeShop'>
                        <Link to='/Shop' className='links'>
                        <h1>Visit our Store</h1>
                        </Link>
                        
                        <Link to='/Shop' className='links'>
                            <img id='shopImg' src='https://scontent-lax3-1.xx.fbcdn.net/v/t31.18172-8/21273700_331608357266054_688289904150058855_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=CqeYiYgmuR8AX8nhcb3&_nc_ht=scontent-lax3-1.xx&oh=b9fc0104480b53be2c92e1f83ae40ded&oe=60DA7B21' alt='Link to Shop' />
                        </Link>
                    </div>

                    <h2>or</h2>

                    <div id='homeAbout' >
                        <Link to='About' className='links'>
                        <h1>Learn About Us</h1>
                        </Link>

                        <Link to='/About' className='links'>
                            <img id='aboutImg' src='https://scontent-lax3-2.xx.fbcdn.net/v/t31.18172-8/21368941_331598513933705_6579325986744054702_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=TtZUphVsP_YAX_OXHsY&_nc_ht=scontent-lax3-2.xx&oh=df0facc45e0a7fcad5a450688aa8329e&oe=60DA8546' alt='Link to About Us' />
                        </Link>
                    </div>
                </div>
            </div>
            </HashRouter>
        )
    }
}



export default Home