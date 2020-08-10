import React, { useEffect, useCallback } from 'react';

import { connect } from 'react-redux';
import { loadCurrProduct } from '../actions/searchActions';
import { updateBag } from '../actions/checkoutActions';
import { setGrowl } from '../actions/GrowlActions';

import ProductContent from '../cmps/product-details/content/ProductContent.jsx';
import ProductGallery from '../cmps/product-details/gallery/ProductGallery.jsx';
import ProductInfo from '../cmps/product-details/info/ProductInfo.jsx';

function ProductDetails({ productData, loadCurrProduct, updateBag, setGrowl, match }) {

    const loadProduct = useCallback(() => {
        const { _id } = match.params;
        loadCurrProduct(_id)
    }, [match.params, loadCurrProduct])

    useEffect(() => {
        loadProduct();
    }, [loadProduct])

    const addToBag = (item) => {
        updateBag(item)
    }

    if (!productData) return null;
    const { product } = productData;
    return (
        <div className="product-details flex column align-center">
            <div className="product-details-container">
                <div className="product-top-container flex">
                    <ProductContent product={product} addToBag={addToBag} setGrowl={setGrowl} />
                    <ProductGallery images={product.imagesUrl} />
                </div>
                <ProductInfo productData={productData} />
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        productData: state.search.currProduct
    };
};

const mapDispatchToProps = {
    loadCurrProduct,
    updateBag,
    setGrowl
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);