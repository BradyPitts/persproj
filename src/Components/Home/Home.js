import React, { Component } from 'react';
import Background from '../shared/Background/Background'
import './Home.css';
import {connect} from 'react-redux';
import {requestUserData} from '../../redux/userReducer2';
// import {requestBudgetData, addPurchase, removePurchase} from '../../redux/budgetReducer';
import Nav from "../shared/Nav";
import Shop from '../Shop/Shop';


class Home extends Component {

    componentDidMount(){
        this.props.requestUserData();
        // this.props.requestBudgetData();
    }

    render() {
        console.log(this.state)
        console.log(this.props)
        // const {loading, purchases, budgetLimit} = this.props.budget;
        const {email} = this.props.user;
        // console.log(loading, )
        return (
            <Background>
                {/*{loading ? <Loading /> : null}*/}
                <div className='budget-container'>
                    <Nav email={email}/>
                    <div className='content-container'>
                       <Shop />
                        {/*<div className="purchases-container">*/}
                            {/*<AddPurchase addPurchase={this.props.addPurchase}/>*/}
                            {/*<DisplayPurchases purchases={purchases}/>*/}
                        {/*</div>*/}
                        {/*<div className='chart-container'>*/}
                            {/*<Chart1 purchases={purchases} budgetLimit={budgetLimit}/>*/}
                            {/*<Chart2 purchases={purchases}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Background>
        )
    }
}

function mapStateToProps(state){
    return {
        // budget: state.budget,
        user: state.user
    }
}

export default connect(mapStateToProps, {requestUserData}) (Home);