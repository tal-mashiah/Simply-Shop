import React, { Component } from 'react'

import { connect } from 'react-redux';
import { loadCurrProduct } from '../actions/searchActions';
import { updateBag } from '../actions/checkoutActions';
import { setGrowl } from '../actions/GrowlActions';

import ProductContent from '../cmps/product-details/content/ProductContent.jsx';
import ProductGallery from '../cmps/product-details/gallery/ProductGallery';
import Spinner from '../cmps/general/Spinner.jsx';
import ProductInfo from '../cmps/product-details/info/ProductInfo';

class ProductDetails extends Component {

    componentDidMount() {
        this.loadProduct();
    }

    loadProduct = () => {
        const { _id } = this.props.match.params;
        this.props.loadCurrProduct(_id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params._id !== this.props.match.params._id) {
            this.loadProduct();
        }
    }

    addToBag = (item) => {
        this.props.updateBag(item)
    }

    render() {
        if (!this.props.productData) return <Spinner />
        const { product } = this.props.productData;
        const { productData, setGrowl } = this.props;        
        return (
            <div className="product-details flex column align-center">
                <div className="product-details-container">
                    <div className="product-top-container flex">
                        <ProductContent product={product} addToBag={this.addToBag} setGrowl={setGrowl} />
                        <ProductGallery images={product.imagesUrl} />
                    </div>
                    <ProductInfo productData={productData} />
                </div>
            </div>
        )
    }
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