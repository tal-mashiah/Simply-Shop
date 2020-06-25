import React, { Component } from 'react'

import { isMobileOnly, isMobile, isTablet, isBrowser } from 'mobile-device-detect';
import ImageGallery from 'react-image-gallery';

export default class ProductGallery extends Component {

    render() {
        const properties = {
            thumbnailPosition: isTablet ? "bottom" : "right",
            showPlayButton: false,
            showNav: isMobile,
            items: this.props.images,
            showThumbnails: !isMobileOnly,
            showFullscreenButton: isBrowser
        };
        return <ImageGallery {...properties} />

    }
}
