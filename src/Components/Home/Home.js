import React, { Component } from 'react';
// import Background from '../shared/Background/Background'
import './Home.css';
// import { connect } from 'react-redux';
// import { requestUserData } from '../../redux/userReducer2';
// import {requestBudgetData, addPurchase, removePurchase} from '../../redux/budgetReducer';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';



class Home extends Component {
    constructor(){
        super();
    
        this.state = {
          banner: 'open',
    
        }
      }

      clickHandler = () => {
        // if(this.state.banner === 'closed'){
        //   this.setState({banner : 'open'}, () =>{
        //   console.log(`the banner is now ${this.state.menu}`)})
        // } 
        if(this.state.banner === 'open'){
          this.setState({banner: 'closed'})
          console.log(`the banner is now ${this.state.menu}`)
        }
      }

    render() {
        return (
            <div id='Home' >
                <div id={this.state.banner}>

                    <img id='banner' alt='Wimpitts Banner' src='./images/newbanner.jpg' />

                    <img id='arrow' alt='Navigation Arrow' src='./images/down-arrow.png' onClick={this.clickHandler}/>

                </div>

                <Header />

                <div id='links'>
                    <div id='homeShop'>
                        <Link to='/Shop' className='links'>
                            <h1>Visit our Store</h1>
                        </Link>

                        <Link to='/Shop' className='links'>
                            <img id='shopImg' alt='Shop' src='./images/shop.jpg' />
                        </Link>
                    </div>

                    <h2>or</h2>

                    <div id='homeAbout' >
                        <Link to='/About' className='links'>
                            <h1>Learn About Us</h1>
                        </Link>

                        <Link to='/About' className='links'>
                            <img id='aboutImg' alt='About' src='./images/about.jpg' />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}



export default Home