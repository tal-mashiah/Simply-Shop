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
        autoPlay: true,
        slideInterval: 4000,
        slideOnThumbnailOver: true,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
    };
    return <ImageGallery {...properties} ref={gallery} />


}
