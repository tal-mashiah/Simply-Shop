import React from 'react'
import ColumnPreview from './ColumnPreview'

const ColumnList = ({ tableData, totalSpecKeys, toggleCompareProduct }) => {
    return (
        <div className="column-list flex">
            <div className="spec-list">
            {totalSpecKeys.map((specKey, idx) => {
                    return <div className="spec key flex justify-center align-center" key={idx}> {specKey}</div>
                })}
            </div>
            {tableData.map((data,idx)=>{
                return <ColumnPreview data={data} key={idx} toggleCompareProduct={toggleCompareProduct}/>
            })}
        </div>
    )
}

export default ColumnList
