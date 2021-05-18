import React, {Component} from 'react';
import Header from '../Header/Header';

export default class About extends Component{

  render(){
    return(
      <div id='about'>
        <Header />

        <h1>Our Story</h1>
        <p>Since 1996
        We have designed a baby blanket to fit your everyday needs.
        A percentage of every blanket will go towards Operation Underground Railroad.</p>
      </div>
    )
  }
};