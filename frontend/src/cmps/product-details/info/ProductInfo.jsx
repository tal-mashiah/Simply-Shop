import React, { Component } from 'react'

export default class ProductInfo extends Component {
    state = {
        openTab: 'Specification',
        embedLink: null
    }

    componentDidMount() {
        this.ConvertLinkToEmbed();
    }

    ConvertLinkToEmbed = () => {
        const { videoUrl } = this.props.productData.product;
        if (videoUrl) {
            const idx = videoUrl.lastIndexOf("=");
            const embedLink = videoUrl.substring(idx + 1);
            this.setState({ embedLink });
        }
    }

    onTabClick = (tabName) => {
        this.setState({ openTab: tabName });
    }

    renderSpecTable() {
        return this.props.productData.specs.map((spec, index) => {
            const { specKey, specValue } = spec
            return (
                <tr key={index}>
                    <td>{specKey}</td>
                    <td>{specValue}</td>
                </tr>
            )
        })
    }

    render() {
        if (!this.props.productData) return null;
        const { openTab, embedLink } = this.state;
        const { product } = this.props.productData;
        if (!product) return null;
        return (
            <div className="product-info">
                <ul className="info-tabs flex">
                    <li className={openTab === 'Specification' ? 'active' : ''} onClick={() => this.onTabClick('Specification')}>מפרט</li>
                    <li className={openTab === 'Description' ? 'active' : ''} onClick={() => this.onTabClick('Description')}>תיאור המוצר</li>
                    {product.videoUrl && <li className={openTab === 'Video' ? 'active' : ''} onClick={() => this.onTabClick('Video')}>סרטון וידאו</li>}
                </ul>
                {openTab !== 'Description' || <div className="product-description">{product.description}</div>}
                {openTab !== 'Specification' ||
                    <table className="product-specification">
                        <tbody>
                            {this.renderSpecTable()}
                        </tbody>
                    </table>}
                {openTab !== 'Video' || <div className="product-video">
                {/* eslint-disable-next-line */}
                    <iframe className="video" src={`https://www.youtube.com/embed/${embedLink}?autoplay=1`} frameBorder="0" allowFullScreen> </iframe>
                </div>}

            </div>
        )
    }
}
