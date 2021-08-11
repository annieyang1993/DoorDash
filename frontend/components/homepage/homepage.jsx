import React from 'react';
import { Link } from 'react-router-dom';
import header from './../../../public/5452421.jpg';
import FooterContainer from '../footer/footer';

//<td class="headerImg"><%=image_tag("/coffeeHeaderImg.png", width: '100%', height: '600', padding: '0', margin: '0-auto', 'object-fit': 'cover')%></td>
class HomePage extends React.Component {
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


  render() {
    return (
      <div className="homePageContainer">
        HomePage!
        <Link to="/" className="header-button" onClick={this.props.logout}>Log Out</Link>
      </div>
    );
  }
}



export default HomePage;

