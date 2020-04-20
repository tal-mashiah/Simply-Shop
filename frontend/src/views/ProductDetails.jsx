import React, { Component } from 'react'

import { connect } from 'react-redux';
import { loadCurrProduct } from '../actions/searchActions';

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
        
        return (
            <div>

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