import React, {Component} from 'react';

class Header extends Component{
  constructor(props){
    super(props);

  }



  render(){
  return(
    <>
      <div id='titleImage' >
        <img src='./images/newbanner.jpg' alt='Wimpitts Banner' />
      </div>
      <header>
        <h1>
          Wimpitts
        </h1>
        <nav>
          {/* <Link>Home</Link> */}
          {/* <Link>Shop</Link> */}
        </nav>
      </header>
    </>
    );
  }
}  
export default Header