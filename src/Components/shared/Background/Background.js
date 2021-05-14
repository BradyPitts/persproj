import React, { Component } from 'react';
import './Background.css'

class Background extends Component {
  render() {
    return (
      <div className='Login'>
        <div className='overlay'>
          <div className='inner-overlay'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Background