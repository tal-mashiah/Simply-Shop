import React, { useRef } from 'react';

import { isMobileOnly, isMobile, isTablet, isBrowser } from 'mobile-device-detect';
import ImageGallery from 'react-image-gallery';

export default function ProductGallery({images}) {

    const gallery = useRef(null);

    const onMouseOver = () => {
        gallery.current.pause();
    }

    const onMouseLeave = () => {
        gallery.current.play();
    }

    const properties = {
        thumbnailPosition: isTablet ? "bottom" : "right",
        showPlayButton: false,
        showNav: isMobile,
        items: images,
        showThumbnails: !isMobileOnly,
        showFullscreenButton: isBrowser,
        autoPlay: isBrowser,
        slideInterval: 3500,
        slideOnThumbnailOver: false,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
    };
    return <ImageGallery {...properties} ref={gallery} />


}
