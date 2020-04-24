import React from 'react'

export default function SearchResultInfo({term, productsLength}) {

    return <h2>{productsLength === 0 ? 'We found no' : productsLength} {productsLength === 1 ? 'result' : 'results'} for <span>"{term}"</span> </h2>
    
}
