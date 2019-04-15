import React from 'react';
import { connect } from 'react-redux';

import './user.css';

const user =(props) => {
    return(
        <div>
            <div className="user-details">
                <h1>User Details</h1>
                <h4>Name</h4>
                <p>{props.responseDataSingle.name ? props.responseDataSingle.name : null}</p>
                <h4>Description</h4>
                <p>{props.responseDataSingle.description ? props.responseDataSingle.description : null}</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
      responseDataSingle:state.red.singleUserData
    }
  }

export default connect(mapStateToProps)(user);