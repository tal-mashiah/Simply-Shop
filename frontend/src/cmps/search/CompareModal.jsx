import React from 'react';
import { Link } from 'react-router-dom';

const CompareModal = ({ products, maxComparedNumber, toggleComparedProduct, deleteComparedProducts }) => {

    const createCubes = () => {
        if (!products[0]) return;
        const cubes = [];
        for (let i = 0; i < maxComparedNumber; i++) {
            const currProduct = products[i];
            cubes.push(
                <div key={i} className="cube">
                    {currProduct && <>
                        <img src={currProduct.imagesUrl[0]} alt={products.title} />
                        <i className="fas fa-times" onClick={() => toggleComparedProduct(currProduct)}></i>
                    </>}
                </div>)
        }
        return cubes;
    }

    return (
        <div className={`compare-modal flex align-center ${products.length ? '' : 'hidden'}`}>
            <i className="fas fa-times" onClick={deleteComparedProducts}></i>
            <div className="cube-list flex">{createCubes()}</div>
            <Link to="/compare"><button className={`main-btn primary`}>להשוואה</button></Link>
        </div>
    )
}

export default CompareModal
