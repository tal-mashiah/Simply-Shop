export function toggleCompareProduct(product) {
    return {
        type: 'TOGGLE_COMPARE_PRODUCT',
        product
    };
}

export function deleteComparedProducts() {
    return {
        type: 'DELETE_COMPARED_PRODUCTS'
    };
}