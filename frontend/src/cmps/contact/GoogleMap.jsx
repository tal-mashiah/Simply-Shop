import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function GoogleMap({ google }) {

    const state = {
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

    return (
        <Map
            containerStyle={state.containerStyle}
            google={google}
            style={state.style}
            zoom={15}
            className={'google-map'}
            initialCenter={state.initialCenter}>
            <Marker />
        </Map>
    );

}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCshiCsBUhtvyGBGxxHnLrO1JnM9BLmaGU')
})(GoogleMap)
