import React, { Component } from 'react'

import { isMobileOnly, isMobile, isTablet, isBrowser } from 'mobile-device-detect';
import ImageGallery from 'react-image-gallery';

export default class ProductGallery extends Component {

    gallery = React.createRef();

    onMouseOver = () => {
        this.gallery.current.pause();
    }

    onMouseLeave = () => {
        this.gallery.current.play();
    }

    render() {
        const properties = {
            thumbnailPosition: isTablet ? "bottom" : "right",
            showPlayButton: false,
            showNav: isMobile,
            items: this.props.images,
            showThumbnails: !isMobileOnly,
            showFullscreenButton: isBrowser,
            autoPlay: true,
            slideInterval: 4000,
            slideOnThumbnailOver: true,
            onMouseOver: this.onMouseOver,
            onMouseLeave: this.onMouseLeave
        };
        return <ImageGallery {...properties} ref={this.gallery} />

    }
}
