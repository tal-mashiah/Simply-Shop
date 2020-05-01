import React from 'react'

export default function SearchResultInfo({ term, productsLength }) {

    return <h2>{productsLength === 0 ? 'לא מצאנו שום' : productsLength === 1 ? '' : productsLength} {productsLength === 1 ? 'תוצאה אחת' : 'תוצאות'} עבור <span>"{term}"</span> </h2>

}
