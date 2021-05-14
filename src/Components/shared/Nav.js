import React, { Component } from 'react';
import "./../Home/Home.css"

class Nav extends Component {
  render() {
      console.log("nav")
      console.log(this.props)
    let { email, admin} = this.props;
    if (!email) email = 'MISSING'
    if (!admin) admin = 'MISSING'

    return (
      <div className="top">
        <div className="user-info">
          {email} {admin}
          {/*<a href='http://localhost:4000/auth/logout'><button className='btn btn-md btn-outline-dark mr-4'>logout</button></a>*/}
        </div>
      </div>
    )
  }
}

export default Nav
