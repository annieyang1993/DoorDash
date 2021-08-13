import * as APIUtil from '../../util/session_api_util';
import React from 'react';
import { Link } from 'react-router-dom';
import header from './../../../public/5452421.jpg';
import FooterContainer from '../footer/footer';
import SimpleMap from './map.jsx'
import RestaurantListView from './restaurant_list_view.jsx'

//<td class="headerImg"><%=image_tag("/coffeeHeaderImg.png", width: '100%', height: '600', padding: '0', margin: '0-auto', 'object-fit': 'cover')%></td>
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleClick = this.handleClick.bind(this);
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

  handleClick(e){
    e.preventDefault();
  }

  componentDidMount(){
    this.props.getAllRestaurants();
  }

  renderRestaurantList(){
    
    var restaurantList = Object.values(this.props.restaurants);
    
    return (
      <ul className="restaurantContainerList"> 
        {restaurantList.map((element, i) => (
          <div>
            <li key={i} className="innerContainerList" >
            <Link className = "restaurantLinks" to={`/api/restaurants/${element["id"]}`}>
            <div className="images">
            <img className = "img1" src={element["img1"]}/>
            <img className="img2" src={element["img2"]} />
            </div>
              <div className="cafeName"> 
              {element["name"]} 
              </div>
            <div className= "cafeDescription">
            {element["description"]}
              </div>
            </Link>
          </li>
            <div className="grayLine"></div>
          </div>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="homePageContainer">
        
        <div className="homepage-inner-container">
          <Link to="/" className="header-button" onClick={this.props.logout}>Log Out</Link>
          
          <form onSubmit={this.handleSubmit} className="location">
            <label>
              <input type="text"
                value={this.props.location}
                onChange={this.update('address')}
                className="location-input"
                placeholder="Enter Location" />
            </label>
            <input className="location-submit" type="submit" value="Find" />
          </form>
          <img className="logo-home" src="/logo-blue.png" />
          <div className="numberofItems">{Object.values(this.props.cart).length === 0 ? <div>Cart</div> : <div>Cart: {Object.values(this.props.cart).length} item(s)</div>}</div>
          <div className="topLineHome"></div>

          <div className="float-container">
            

            <div className="float-child-2">
              {this.renderRestaurantList()}
              
            </div>
            <div className="float-child-1">
              <SimpleMap/>
              
            </div>
          </div>
          
          

          
          

        </div>
       
        
      </div>
    );
  }
}



export default HomePage;

