import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions';
import './home.css';

const home = (props) => {
    return (
        <div>
            <h1>Users List</h1>
            <div className="display">
                {props.myData ? props.myData.map((res,i) => {
                    return(
                        <div key={i} className="display-item"><Link to={"/"+res.name} onClick={() => props.passSingleUserData(res.name)}>{res.name}</Link></div>       
                    )
                }) : null }
            </div>
        </div>
    );
}
  
const mapDispatchToProps = (dispatch) => {
    return{
      passSingleUserData:(id) => dispatch(actionTypes.getSingleUserData(id))
    }
}

export default connect(null,mapDispatchToProps)(home);