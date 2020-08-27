import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { doneLoading, loading } from '../actions/SystemActions'
import { toggleCompareProduct } from '../actions/compareAction'

import searchService from '../services/searchService';

import ComparedProductsTable from '../cmps/compare/ComparedProductsTable';

export const Compare = ({ products, doneLoading, loading, toggleCompareProduct }) => {
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        const loadCurrProduct = async (id) => {
            try {
                loading();
                const ProductData = await searchService.getById(id);
                return ProductData;
            }
            catch (err) {
                console.log('err in load currProduct', err);
            }
            finally {
                doneLoading();
            }
        };
        const getProductsData = async () => {
            const data = [];
            for (const product of products) {
                const ProductData = await loadCurrProduct(product._id);
                data.push(ProductData);
            }
            setProductsData(data);
        }
        getProductsData();
    }, [products, loading, doneLoading])

    return (
        <>
            {products.length
                ? <ComparedProductsTable productsData={productsData} toggleCompareProduct={toggleCompareProduct} />
                : <div className="empty-page flex align-center column justify-center">
                    <div className="title">לא נבחרו מוצרים להשוואה...</div>
                    <Link to="/"><button className="main-btn primary">חזרה לקניות</button></Link>
                </div>}
        </>
    )
}

const mapStateToProps = (state) => ({
    products: state.compare.compareProducts
})

const mapDispatchToProps = {
    toggleCompareProduct,
    doneLoading,
    loading
}

export default connect(mapStateToProps, mapDispatchToProps)(Compare)





