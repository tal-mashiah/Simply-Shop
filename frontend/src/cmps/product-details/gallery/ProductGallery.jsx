import React, { Component } from 'react'

import ImageGallery from 'react-image-gallery';

export default class ProductGallery extends Component {

    render() {
        const properties = {
            thumbnailPosition: "right",
            slideOnThumbnailOver:true,
            showPlayButton: false,
            showNav: false,
            items: this.props.images
        };
        return <ImageGallery {...properties} />
        
    }
}
