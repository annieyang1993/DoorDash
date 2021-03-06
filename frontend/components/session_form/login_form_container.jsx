import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';


const mapStateToProps = ({ errors=[] }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <div className = "signUpNav"><Link to="/signup">Sign Up</Link></div>,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
