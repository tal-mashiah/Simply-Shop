import React, { useState, useEffect } from 'react'

export default function ProductInfo({ productData }) {

    const [openTab, setOpenTab] = useState('Specification');
    const [embedLink, setEmbedLink] = useState(null);

    useEffect(() => {
        const ConvertLinkToEmbed = () => {
            const { videoUrl } = productData.product;
            if (productData.product.videoUrl) {
                const idx = videoUrl.lastIndexOf("=");
                const embedLink = videoUrl.substring(idx + 1);
                setEmbedLink(embedLink);
            }
        }
        ConvertLinkToEmbed();
    }, [productData])


    const onTabClick = (tabName) => {
        setOpenTab(tabName);
    }

    const renderSpecTable = () => {
        return productData.specs.map((spec, index) => {
            const { specKey, specValue } = spec
            return (
                <tr key={index}>
                    <td>{specKey}</td>
                    <td>{specValue}</td>
                </tr>
            )
        })
    }

    if (!productData) return null;
    const { product } = productData;
    if (!product) return null;
    return (
        <div className="product-info">
            <ul className="info-tabs flex">
                <li className={openTab === 'Specification' ? 'active' : ''} onClick={() => onTabClick('Specification')}>מפרט</li>
                <li className={openTab === 'Description' ? 'active' : ''} onClick={() => onTabClick('Description')}>תיאור המוצר</li>
                {product.videoUrl && <li className={openTab === 'Video' ? 'active' : ''} onClick={() => onTabClick('Video')}>סרטון וידאו</li>}
            </ul>
            {openTab !== 'Description' || <div className="product-description">{product.description}</div>}
            {openTab !== 'Specification' ||
                <table className="product-specification">
                    <tbody>
                        {renderSpecTable()}
                    </tbody>
                </table>}
            {openTab !== 'Video' || <div className="product-video">
                {/* eslint-disable-next-line */}
                <iframe className="video" src={`https://www.youtube.com/embed/${embedLink}?autoplay=1`} frameBorder="0" allowFullScreen> </iframe>
            </div>}

        </div>
    )

}
