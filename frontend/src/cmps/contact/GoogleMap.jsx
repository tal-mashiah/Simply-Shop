import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class GoogleMap extends Component {
    state = {
        style: {
            width: '100%',
            height: '100%'
        },
        containerStyle: {
            position: 'relative',
            width: '100%',
            height: '400px'
        },
        initialCenter: {
            lat: 32.0817,
            lng: 34.7808
        }
    }

    render() {
        return (
            <Map
                containerStyle={this.state.containerStyle}
                google={this.props.google}
                style={this.state.style}
                zoom={15}
                initialCenter={this.state.initialCenter}>
                <Marker />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCshiCsBUhtvyGBGxxHnLrO1JnM9BLmaGU')
})(GoogleMap)
