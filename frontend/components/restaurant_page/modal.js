import React from 'react';
import { Link } from 'react-router-dom';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
        };
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleClick() {
        this.props.setModal(false);


    }

    addToCart(item){
     if (Object.values(this.props.cart).length===0){
         
        this.props.addItemToCart(item);
     } else if (!(Object.values(this.props.cart)[0]["restaurant_id"]===this.props.restaurantId)){
         alert("Your cart currently has items from another restaurant. Empty cart first to add items");
     } else{
         this.props.addItemToCart(item);
     }
    }
    
    renderModal(){
        return(
            <div className="ModalView">
                <img className="exitButton" onClick={()=>this.handleClick()} src="/x.png"/>
                    <div className="currentItemName">{this.props.currentItem["name"]}</div>
                <div className="currentItemDescription">{this.props.currentItem["description"]}</div>
                    <img className = "itemPicture" src={this.props.currentItem["img"]===null?
                        `/FillerLogo.png` :
                    `/Partners/${this.props.currentItem["img"]}.png`}/>
                    
               <div className = "addToCartTag"
               onClick={()=>this.addToCart(this.props.currentItem)}>Add to Cart - ${this.props.currentItem["price"]}</div>
            </div>)
        
    }
    render() {

        
        return (
            <div className="modal">
                {this.props.modalStatus["modalStatus"]===true? this.renderModal() : <div></div>}

            </div>
        );
    }
}

import { connect } from 'react-redux';
import { oneRestaurant, menu, getItem, modalStatus } from '../../actions/restaurant_actions';
import { addItemToCart, clearCartItems } from '../../actions/cart_actions';

const mapStateToProps = ({ session, entities: { users, restaurants, currentRestaurant, menu, currentItem, modalStatus, cart } }) => {
    return {
        location: users[location],
        currentUser: users[session.id],
        restaurants: restaurants,
        currentRestaurant: currentRestaurant,
        restaurantId: currentRestaurant["id"],
        menuList: menu,
        currentItem: currentItem,
        modalStatus: modalStatus,
        cart: cart
    };
};

const mapDispatchToProps = dispatch => ({
    getCurrentRestaurant: (restaurantId) => dispatch(oneRestaurant(restaurantId)),
    menu: (restaurantId) => dispatch(menu(restaurantId)),
    getItem: (restaurantId, itemId) => dispatch(getItem(restaurantId, itemId)),
    setModal: (bool) => dispatch(modalStatus(bool)),
    addItemToCart: (item) => dispatch(addItemToCart(item)),
    clearCartItems: ()=>dispatch(clearCartItems())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);