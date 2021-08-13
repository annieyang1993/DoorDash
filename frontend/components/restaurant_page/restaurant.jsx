import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './cart.js';

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

    renderEvenBox(count){
        if (count%2===0){
            return (<div></div>)
        } else{
            return (<li className="evenMenuItem" key={count+1}>

                <div className="evenMenuItemLeft"></div>
            </li>)
        }
    }

    handleClick(id){
        this.props.getItem(this.props.restaurantId, id);
        this.props.setModal(true);
        //console.log(id);
        //const {currentItem} = this.props;
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
                    {menuSections.map((element, i)=>{
                        var count = 0;
                        return(
                        <li className = "section" key={element}>
                            <br /><div className="sectionTitle">{element}</div>
                            <ul className = "sectionItems">
                            {menuList.map((element2, i) => {
                                
                                if (element2["section"]===element){
                                    count+=1;
                                    return(
                                    <li className="menuItem" key={element2["name"]} onClick={()=>this.handleClick(element2["id"])}>
                                        
                                        <div className="menuItemLeft">{element2["name"]}
                                        <div className="menuItemDescription">{element2["description"]}</div></div>
                                        <img className="menuItemRight" src={element2["img"] ? `/Partners/${element2["img"]}.png` : 'FillerLogo.png'} />
                                    </li>)
                                } else{
                                    return(<div></div>)
                                }

                            })}
                            <div>
                            {this.renderEvenBox(count)}
                            </div>
                                    
                            </ul> 
                                <div className="break" />
                                
                                

                        </li> 
                        )
                            

                         

                    
                        })}
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
                
                    <div className="numberofItems">{Object.values(this.props.cart).length === 0 ? <div>Cart</div> : <div>Cart: {Object.values(this.props.cart).length} item(s)</div>}</div>
                
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
                    <Cart/>
                    
                </div>
                </div>
                
            </div>
        );
    }
}

export default RestaurantPage;
