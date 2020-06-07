import React, { Component } from 'react'

import mobile from 'is-mobile';
import ImageGallery from 'react-image-gallery';

export default class ProductGallery extends Component {

    render() {
        const properties = {
            thumbnailPosition: "right",
            slideOnThumbnailOver:true,
            showPlayButton: false,
            showNav: mobile(),
            items: this.props.images,
            showThumbnails: !mobile(),
            showFullscreenButton: !mobile()
        };
        console.log(mobile());

        return <ImageGallery {...properties} />
        
    }
}
