import React, { useEffect, useState } from 'react';

import searchService from '../services/searchService'

import { connect } from 'react-redux';
import { updateBag } from '../actions/checkoutActions';
import { setGrowl } from '../actions/GrowlActions';
import { loading, doneLoading } from '../actions/SystemActions';

import ProductContent from '../cmps/product-details/content/ProductContent.jsx';
import ProductGallery from '../cmps/product-details/gallery/ProductGallery.jsx';
import ProductInfo from '../cmps/product-details/info/ProductInfo.jsx';

function ProductDetails({ loading, doneLoading, updateBag, setGrowl, match }) {

    const [productData, setProductData] = useState(null)

    useEffect(() => {
        const loadCurrProduct = async (id) => {
            try {
                loading();
                const currProduct = await searchService.getById(id);
                setProductData(currProduct);
            }
            catch (err) {
                console.log('err in load currProduct', err);
            }
            finally {
                doneLoading();
            }
        };

        loadCurrProduct(match.params._id);

        return () => {
            setProductData(null);
        }
    }, [match.params._id, loading, doneLoading])

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

const mapDispatchToProps = {
    doneLoading,
    updateBag,
    setGrowl,
    loading
};

export default connect(null, mapDispatchToProps)(ProductDetails);