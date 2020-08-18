import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { isMobile, isBrowser } from 'mobile-device-detect';

import searchService from '../../services/searchService';
import SearchProductList from './SearchProductList';

function SearchBar({ isSearchBarOpen, toggleSearchBar, history }) {

    const [term, setTerm] = useState('')
    const [products, setProducts] = useState([])
    const [isModalShown, setIsModalShown] = useState(false)
    const [isNoResultShown, setIsNoResultShown] = useState(false)

    const searchInputRef = useRef(null)


    const handleChange = (ev) => {
        setTerm(ev.target.value)
    }

    useEffect(() => {
        if (!term) {
            setProducts([]);
        }
        else {
            const getProductsByTerm = async () => {
                const products = await searchService.getByTerm(term)
                setProducts(products);
                setIsNoResultShown(products.length === 0);
            }
            getProductsByTerm();
        }
    }, [term])

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (isMobile) {
            searchInputRef.current.focus();
            openSearchModal();
            isSearchBarOpen || toggleSearchBar();
        }
        if (!term) return;

        closeSearchModal();
        history.push(`/search/${term}`);
        setTerm('');
    }

    const onScreenClicked = () => {
        if (isMobile) {
            closeSearchModal();
        } else {
            isModalShown && setIsModalShown(false);
            products.length && setTerm('');
        }
    }

    const closeSearchModal = () => {
        if (isModalShown) {
            setIsModalShown(false);
            setTerm('');
            setProducts([]);
        }
        searchInputRef.current.blur();
        if (isMobile) {
            toggleSearchBar();
        }
    }

    const openSearchModal = () => {
        isModalShown || setIsModalShown(true);
    }

    return (
        <div className='search-bar flex align-center'>
            <form onSubmit={onSubmit}>
                <input type="text" ref={searchInputRef} className="search-input" onClick={openSearchModal} onChange={handleChange} value={term} placeholder="חפש..." />
                <i className="fas fa-search" onClick={onSubmit}></i>
            </form>
            {(isSearchBarOpen || isBrowser) && products.length && isModalShown ? <SearchProductList products={products} onProductClick={closeSearchModal} /> : null}
            {(isSearchBarOpen || isBrowser) && isModalShown && (term || isMobile) ? <div className="search-bar-screen" onClick={onScreenClicked}></div> : null}
            {isNoResultShown && isModalShown && term ? <div onClick={closeSearchModal} className="search-bar-modal-container no-result">אין תוצאות</div> : null}
        </div>
    )
}

export default withRouter(SearchBar);