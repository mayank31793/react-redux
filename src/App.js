import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Home from './Home/home';
import User from './User/user';
import * as actionTypes from './store/actions';

class App extends Component {

  componentDidMount(){
    this.props.userData();
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact render={(props) => <Home 
          {...props} 
          myData={this.props.responseData}  />} />
        <Route path="/:name" component={User} /> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    responseData:state.red.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    userData:() => dispatch(actionTypes.getData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);