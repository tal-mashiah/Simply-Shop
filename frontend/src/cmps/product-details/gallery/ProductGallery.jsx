import React, { Component } from 'react'

import ImageGallery from 'react-image-gallery';
import ImageGalleryZoom from '../../product-details/gallery/ImageGalleryZoom.jsx';

export default class ProductGallery extends Component {

    myRenderItem = (image) => {
        return <ImageGalleryZoom image={image} />;
    }

    render() {
        const properties = {
            thumbnailPosition: "left",
            slideOnThumbnailOver:true,
            showFullscreenButton: false,
            showPlayButton: false,
            showNav: false,
            renderItem: this.myRenderItem.bind(this),
            items: this.props.images
        };
        return <ImageGallery {...properties} />
        
    }
}
