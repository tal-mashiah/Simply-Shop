import React, { useEffect, useState } from 'react'
import ColumnList from './ColumnList';

function ComparedProductsTable({ productsData, toggleCompareProduct}) {

    const [totalSpecKeys, setTotalSpecKeys] = useState([]);
    const [tableData, setTableData] = useState(null)

    useEffect(() => {
        const totalSpecKeys = [];
        for (const data of productsData) {
            for (const spec of data.specs) {
                totalSpecKeys.push(spec.specKey);
            }
        }

        const uniqTotalSpecKeys = [...new Set(totalSpecKeys)]

        for (const totalSpecKey of uniqTotalSpecKeys) {
            for (const data of productsData) {
                const isExist = data.specs.some(spec => spec.specKey === totalSpecKey);
                if (!isExist) {
                    data.specs.push({ specKey: totalSpecKey, specValue: null })
                }
                data.specs.sort((a, b) => (a.specKey > b.specKey) ? 1 : -1)
            }
        }

        setTableData(productsData);
        setTotalSpecKeys(uniqTotalSpecKeys);
    }, [productsData])

    if(!tableData) return null;
    return <ColumnList tableData={tableData} totalSpecKeys={totalSpecKeys} toggleCompareProduct={toggleCompareProduct}/>
}

export default ComparedProductsTable
