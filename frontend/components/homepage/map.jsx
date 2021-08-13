import React, {Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 40.7536762,
            lng: -73.9692025
        },
        zoom: 14
    };

    render() {
        var restaurantList = Object.values(this.props.restaurants)
    
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    className="GoogleMapReact"
                    bootstrapURLKeys={{ key: "AIzaSyC8Vo2NBMXdPDU3hpOyQutB4bFi3x6ziMU" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >   
                {restaurantList.map((element, i)=>{

                    return(
                    <img src="/marker-blue.png"
                    className="markers"
                        key={i}
                        lat={element["latitude"]}
                        lng={element["longitude"]}
                        text="My Marker"

                    />
                    )
        })}
                    
                    
                </GoogleMapReact>
            </div>
        );
    }
}

import { connect } from 'react-redux';


const mapStateToProps = ({ session, entities: { users, restaurants, currentRestaurant } }) => {

    return {
        location: users[location],
        currentUser: users[session.id],
        restaurants: restaurants,
        currentRestaurant: currentRestaurant
    };
};

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SimpleMap);

