import React from 'react';
import { Link } from 'react-router-dom';
import header from './../../../public/5452421.jpg';

//<td class="headerImg"><%=image_tag("/coffeeHeaderImg.png", width: '100%', height: '600', padding: '0', margin: '0-auto', 'object-fit': 'cover')%></td>
class GreetingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div>
        <img className="headerImg" src='https://quogueclub.com/wp-content/uploads/2020/11/Coffee.png' width="100%" height="600px" style={{position: 'relative'}}/>
        <div top="50%" left="50%" color="white">Coffee shops and more, ready out the door</div>
        <br/>
        <div>
          <form onSubmit={this.handleSubmit} className="delivery-search-box">
            <label>
              <input type="text"
              value={this.state.address}
              onChange={this.update('address')}
              className="address-input"/>
            </label>
            <br/>
            <input className="address-submit" type="submit" value="Find Near Me"/>
          </form>
        </div>
      </div>
    );
  }
}



export default GreetingPage;

// const Greeting = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//       <Link to="/signup">Sign up!</Link>
//     </nav>
//   );

//   const signupLink = () => (
//     <Link to="/signup" >Sign up!</Link>
//   );

//   const loginLink = () => (
//     <Link to="/login">Login</Link>
//   );

//   const personalGreeting = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {currentUser.username}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );
//   if (currentUser){
//     return personalGreeting();
//   } else if (window.location.href.split("#")[1]==="/"){
//     return sessionLinks();
//   } else{
//     return (<div></div>)
//   }

// };


// export default Greeting;
