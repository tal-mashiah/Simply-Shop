import React, { Component } from 'react';

import SearchResultInfo from './SearchResultInfo';
import SelectBox from '../general/SelectBox.jsx';

export default class SearchHeader extends Component {
    state = {
        options: [
            { key: 'bestMatch', value: 'רלוונטיות' },
            { key: 'PriceAscending', value: 'מחיר: מהנמוך לגבוה' },
            { key: 'PriceDescending', value: 'מחיר: מהגבוה לנמוך' }
        ]
    };

    render() {
        const {term, productsLength, updateSort} = this.props;
        const {options} = this.state;
        return (
            <div className="search-header flex align-center justify-between">
            <SearchResultInfo term={term} productsLength={productsLength}/>
            <SelectBox handleChange={updateSort} options={options}/>
        </div>
        )
    }
}
