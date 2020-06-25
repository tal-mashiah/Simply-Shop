const ObjectId = require('mongodb').ObjectId;

const sortProducts = (products, sort) => {
    switch (sort) {
        case 'bestMatch':
            return products;
        case 'PriceAscending':
            return products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        case 'PriceDescending':
            return products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        default:
            break;
    }
}

const createPriceFilter = (allProducts, products) => {
    const prices = products.map(product => product.price);
    const allPrices = allProducts.map(product => product.price);
    const max = Math.max(...prices);
    const min = Math.min(...prices);
    const generalMax = Math.max(...allPrices);
    const generalMin = Math.min(...allPrices);
    return { max, min, generalMax, generalMin }
}

const createFilters = (specKeys, specValues, selectedFilters) => {
    let newFilters = [];
    if (selectedFilters.length > 0) {
        specValues = _updateSpecValues(specValues, selectedFilters);
    }
    for (let specKey of specKeys) {
        let KeyValues = [];
        for (let value of specValues) {
            if (value.specKeyId.toString() === specKey._id.toString()) {
                KeyValues.push(value);
            }
        }
        newFilters.push({ key: specKey.name, values: KeyValues });
    }
    return newFilters;
};

const buildCriteria = (filterBy) => {
    const criteria = {};
    if (filterBy.categoryId) {
        criteria['categoryId'] = ObjectId(filterBy.categoryId);
    }
    if (filterBy.priceFilter.min || filterBy.priceFilter.max) {
        criteria['price'] = { $gte: filterBy.priceFilter.min || 0, $lte: filterBy.priceFilter.max || Infinity }
    }
    if (filterBy.filters && filterBy.filters.length > 0) {
        const filterIds = filterBy.filters.map(filter => ObjectId(filter._id));
        criteria['specValues'] = { $all: filterIds };
    }
    if (filterBy.searchValue) {
        criteria['title'] = new RegExp(".*" + filterBy.searchValue + ".*", "i");
    }
    return criteria;
}

const createSpecs = (specKeys, specValues) => {
    let specs = [];
    for (let specValue of specValues) {
        for (const specKey of specKeys) {
            if (specValue.specKeyId.toString() === specKey._id.toString()) {
                specs.push({ specKey: specKey.name, specValue: specValue.name })
            }
        }
    }
    specs.sort((a, b) => (a.specKey > b.specKey) ? 1 : ((b.specKey > a.specKey) ? -1 : 0));
    return specs;
}

const createImages = (imageUrls) => {
    const images = [];
    for (const imageUrl of imageUrls) {
        console.log(imageUrl);
        
        images.push({ original: imageUrl, thumbnail: imageUrl })
    }
    return images;
}

const _updateSpecValues = (values, filters) => {
    return values.map(value => {
        let updateValue = { ...value, selected: false };
        for (const filter of filters) {
            if (filter._id.toString() === value._id.toString()) {
                updateValue = { ...value, selected: true };
            }
        }
        return updateValue;
    })
}

module.exports = {
    createPriceFilter,
    createFilters,
    buildCriteria,
    createSpecs,
    createImages,
    sortProducts
}