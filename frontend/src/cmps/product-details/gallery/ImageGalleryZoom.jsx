import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";

export default class ImageGalleryZoom extends Component {
    state = { width: null, height: null }

    componentDidMount() {
        var img = new Image();
        img.src = this.props.image.original;
        this.setState({ width: img.width, height: img.height })
    }

    render() {
        const { original } = this.props.image;
        const { width, height } = this.state;
        return (
            <ReactImageMagnify
                {...{
                    smallImage: {
                        alt: "Product Image",
                        isFluidWidth: true,
                        src: original
                    },
                    largeImage: {
                        src: original,
                        width: width * 3,
                        height: height * 3
                    },
                    enlargedImagePortalId: "myPortal"
                }}
            />
        );
    }
}

