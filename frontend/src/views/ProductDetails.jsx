import React, { Component } from 'react'

import { connect } from 'react-redux';
import { loadCurrProduct } from '../actions/searchActions';

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

    render() {
        console.log(this.props.productData);
        if (!this.props.productData) return <Spinner />
        const { product } = this.props.productData;
        return (
            <div className="product-details flex column align-center">
                <div className="product-details-container">
                    <div className="product-top-container flex">
                        <ProductGallery images={product.imagesUrl} />
                        <ProductContent product={product} />
                    </div>
                    <ProductInfo product={product}/>
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
    loadCurrProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);