import React, { Component } from 'react';

// import SearchResultInfo from './SearchResultInfo';
import SelectBox from '../general/SelectBox.jsx';

export default class SearchHeader extends Component {
    state = {
        options: [
            { key: 'bestMatch', value: 'רלוונטיות' },
            { key: 'PriceAscending', value: 'מחיר: מהנמוך לגבוה' },
            { key: 'PriceDescending', value: 'מחיר: מהגבוה לנמוך' }
        ],
        isSticky: false
    };
    title = React.createRef()

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > this.title.current.offsetHeight) {
            this.setState({ isSticky: true });
        } else {
            this.setState({ isSticky: false });
        }
    }

    render() {
        const { term, productsLength, updateSort, toggleFilters } = this.props;
        const { options, isSticky } = this.state;

        return (
            <div className="search-header flex align-center justify-between">
                <h2 ref={this.title}>{productsLength === 0 ? 'לא מצאנו שום' : productsLength === 1 ? '' : productsLength} {productsLength === 1 ? 'תוצאה אחת' : 'תוצאות'} עבור <span>"{term}"</span> </h2>
                {productsLength === 0 || <div className={`btns-container flex ${isSticky ? 'sticky' : ''}`}>
                    <div className="filter-btn flex justify-center align-center" onClick={toggleFilters}>
                        <i className="fas fa-filter"></i>
                        <div className="title">סנן תוצאות</div>
                    </div>
                    {productsLength === 0 || <SelectBox handleChange={updateSort} options={options} />}
                </div>}
            </div>
        )
    }
}
