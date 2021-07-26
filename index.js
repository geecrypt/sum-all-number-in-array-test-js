const sumItems = array => (array.reduce((sum, e) => sum += Array.isArray(e) ? sumItems(e) : e, 0));

module.exports = sumItems;
