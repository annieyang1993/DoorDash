import React from 'react';
import { Link } from 'react-router-dom';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
        };
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     var urlArray = window.location.href.split("/");
    //     var restaurantId = urlArray[urlArray.length - 1];
    //     var itemList = []
    //     this.props.getCurrentRestaurant(restaurantId).then(() => {
    //         this.props.menu(restaurantId);
    //     })

    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const location = Object.assign({}, this.state);
    //     this.props.receiveLocation(location);
    // }

    // renderEvenBox(count) {
    //     if (count % 2 === 0) {
    //         return (<div></div>)
    //     } else {
    //         return (<li className="evenMenuItem" key={count + 1}>

    //             <div className="evenMenuItemLeft"></div>
    //         </li>)
    //     }
    // }

    handleClick() {
        this.props.setModal(false);
        //console.log(id);
        //const {currentItem} = this.props;


    }
    
    renderModal(){
        return(
            <div className="ModalView">
                <div className="exitButton" onClick={()=>this.handleClick()}>
                    x
                    
                    <img src={this.props.currentItem["img"]===null?
                        `/FillerLogo.png` :
                    `/Partners/${this.props.currentItem["img"]}.png`}/>
                    
                </div>
            </div>)
        
    }
    render() {

        //console.log(this.props.currentRestaurant);
        return (
            <div className="modal">
                {this.props.modalStatus["modalStatus"]===true? this.renderModal() : <div></div>}

            </div>
        );
    }
}

import { connect } from 'react-redux';
import { oneRestaurant, menu, getItem, modalStatus } from '../../actions/restaurant_actions';

const mapStateToProps = ({ session, entities: { users, restaurants, currentRestaurant, menu, currentItem, modalStatus } }) => {
    return {
        location: users[location],
        currentUser: users[session.id],
        restaurants: restaurants,
        currentRestaurant: currentRestaurant,
        restaurantId: currentRestaurant["id"],
        menuList: menu,
        currentItem: currentItem,
        modalStatus: modalStatus
    };
};

const mapDispatchToProps = dispatch => ({
    getCurrentRestaurant: (restaurantId) => dispatch(oneRestaurant(restaurantId)),
    menu: (restaurantId) => dispatch(menu(restaurantId)),
    getItem: (restaurantId, itemId) => dispatch(getItem(restaurantId, itemId)),
    setModal: (bool) => dispatch(modalStatus(bool))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);