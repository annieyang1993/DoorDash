import React from 'react';
import { Link } from 'react-router-dom';
import header from './../../../public/5452421.jpg';
import FooterContainer from './../footer/footer';
import HomePageContainer from './../homepage/homepage_container';

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
    const location = Object.assign({}, this.state);
    this.props.receiveLocation(location);
  }

  sessionLinks() {
    if (this.props.currentUser){
      return(
        <HomePageContainer/>
      )
    } else{
      return(
     <nav className="login-signup">
       <Link to="/login" className = "loginContainer">Sign In</Link>
        <div className = "signupBackground">
       <Link to="/signup" className = "signupContainer">Sign up</Link>
        </div>
     </nav>)
    }
  };

  render() {
    //if (this.props.currentUser)
    return (
      <div className="greetingContainer">
        <div>
        <img className="headerImg" src="/HeaderImgClean5.png" />
        <h1><img className="logo" src="/logo-white.png" /></h1>
        <div className = "welcome" top="50%" left="50%" color="white">Coffee shops and more, ready out the door</div>
        </div>
        <br/>
        <div>
          <form onSubmit={this.handleSubmit} className="delivery-search-box">
            <label>
              <input type="text"
              value={this.state.address}
              onChange={this.update('address')}
              className="address-input"
              placeholder="Enter Location" />
            </label>
            <input className="address-submit" type="submit" value="Find"/>
          </form>
        </div>
        <div>
        {this.sessionLinks()}
        </div>

        <div className="secondLayer">
          <div className="secondText">It's all here. All in one app.
          <br/>
            <input className="secondButton" type="submit" value="Get the app" />
            </div>
          
          <img className="secondImg" src="/coffee.png" />
          
        </div>

        <div className = "thirdLayer">
          <div className="thirdText">Every Flavor Welcome.
            <br/>
            <input className="thirdButton" type="submit" value="Find Restaurants" /></div>
          <img className="thirdImg" src="/BBT.png" />
        </div>

        <div className="backgroundColor"></div>

        <FooterContainer/>

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
