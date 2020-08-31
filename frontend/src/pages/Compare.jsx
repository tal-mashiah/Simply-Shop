import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { doneLoading, loading } from '../actions/SystemActions'
import { toggleCompareProduct } from '../actions/compareAction'

import compareService from '../services/compareService';
import storageService from '../services/storageService';

import ComparedProductsTable from '../cmps/compare/ComparedProductsTable';

export const Compare = ({ products, doneLoading, loading, toggleCompareProduct }) => {

    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        storageService.saveToSession('compareProducts', products);

        const loadCurrProduct = async (ids) => {
            try {
                loading();
                return await compareService.getByIds(ids);
            }
            catch (err) {
                console.log('err in load ProductsData', err);
            }
            finally {
                doneLoading();
            }
        };

        const getProductsData = async () => {
            const ids = products.map(product => product._id);
            const ProductsData = await loadCurrProduct(ids)
            setProductsData(ProductsData);
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





