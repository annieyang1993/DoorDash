import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        var urlArray = window.location.href.split("/");
        var restaurantId = urlArray[urlArray.length - 1];
        var itemList=[]
        this.props.getCurrentRestaurant(restaurantId).then(()=>{
            this.props.menu(restaurantId);
        })
        
        
        

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

    renderItemList() {
        var menuList = Object.values(this.props.menuList)
        var menuSections = []
        menuList.forEach((element)=>{
            if (!menuSections.includes(element["section"])){
                menuSections.push(element["section"]);
            }   
        })
        console.log(menuSections);
        return (
            <div> 
                <ul className = "menuSections">
                    {menuSections.map((element, i)=>(
                        <li className = "sectionItem" key={element}>{element}</li>
                    ))}
                </ul>

                <ul className="menuItems">
                    {menuList.map((element, i) => (
                        <li className="menuItem" key={element["name"]}>{element["name"]}</li>
                    ))}
                </ul>

                <div className="bottomLineRestaurant"></div>
            </div>
        );
    }

    render() {
        
        //console.log(this.props.currentRestaurant);
        return (
            <div className="restaurant-container">
                <Link to="/" className="header-button" onClick={this.props.logout}>Log Out</Link>
                <div className="pickup">Pickup </div>
                <div className="ASAP">ASAP</div>
                <div className="from">near</div>
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
                <div className="cart-outside">
                    <img className="cart-home" src="/cart.png" />
                </div>
                <div className="topLineRestaurant"></div>

                <div className="restaurant-and-menu-container">
                <div className = "restaurantInfoContainer">
                    <img src={this.props.currentRestaurant["img1"]} className = "restaurant-header-img"/>
                    <div className="restaurant-name">{this.props.currentRestaurant["name"]}</div>
                    <div className="restaurant-description">{this.props.currentRestaurant["description"]}</div>
                    <div className="bottomLine"></div>
                    <div className="restaurantMenu">{this.renderItemList()}</div>
                </div>
                <div className = "restaurantMenuContainer">

                </div>
                </div>
                
            </div>
        );
    }
}

export default RestaurantPage;
