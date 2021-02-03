/**
 * @typedef {Object} PreprocessedArguments
 * @param {String[]} filters
 * @param {Boolean} count
 */

/**
 *
 * Transforms arguments from raw to usable object describing operations to process on array. Throws error if argument is unknown.
 *
 * @param {String[]} args
 *
 * @returns {PreprocessedArguments}
 */
const preprocessArguments = (args) => {
    const FILTER_ARGUMENT = '--filter=';
    const COUNT_ARGUMENT = '--count';
    return args.reduce((preprocessedArguments, argument) => {
        // Checks if filter argument & enough chars to contain a real filter
        // i.e. "--filter=" without a string specified won't pass
        if (argument.indexOf(FILTER_ARGUMENT) === 0 && argument.length > FILTER_ARGUMENT.length) {
            return {
                ...preprocessedArguments,
                filters: preprocessedArguments.filters.concat([
                    argument.slice(FILTER_ARGUMENT.length),
                ]),
            };
        } else if (argument === COUNT_ARGUMENT) {
            return {
                ...preprocessedArguments,
                count: true,
            };
        }
        throw new Error(`Argument ${argument} is forbidden`);
    }, {
        count: false,
        filters: [],
    });
};

/**
 *
 * Filters array by searching one or several patterns inside "name" field of items in given key.
 *
 * @param {Array} array
 * @param {String[]} filters
 * @param {String} filteringKey
 *
 * @returns {Array}
 */
const filterArray = (array, filters, filteringKey = undefined) => {
    if (filteringKey === undefined) {
        throw new Error('No filtering key is defined');
    }

    // This is the tricky part
    return array
        .map((item) => Object.keys(item).reduce((currentItem, key) => {
            if (Array.isArray(item[key])) {
                // Here, if the array is the one we are looking into for patterns, we'll do that
                // Else we will apply this algorithm on each item of array
                return {
                    ...currentItem,
                    [key]: (key === filteringKey)
                        ? item[key].filter((subItem) => filters
                            .filter((pattern) => subItem.name.indexOf(pattern) === -1)
                            .length === 0)
                        : filterArray(item[key], filters, filteringKey),
                };
            }
            return {
                ...currentItem,
                [key]: item[key],
            };

        }, {}))
        // Final clean : remove item in array if all arrays in this item are empty
        .filter((item) => Object.keys(item)
            .filter((key) => Array.isArray(item[key]) && item[key].length > 0).length > 0
        );
};

/**
 * Adds items count for each element that contain an array.
 *
 * @param {Array} array
 *
 * @returns {Array}
 */
const countArray = (array) => array.map((item) => Object.keys(item).reduce((currentItem, key) => {
    // If value is array, apply recursively algorithm on it, and add
    // length to parent's name
    if (Array.isArray(item[key])) {
        return {
            ...currentItem,
            [key]: countArray(item[key]),
            name: `${currentItem.name} [${item[key].length}]`,
        };
    }

    return {
        [key]: item[key],
        ...currentItem,
    };
}, {
    name: item.name || '',
}));

/**
 *
 * Transforms array in function of given arguments <br>- First filters array in function of patterns if needed (see @filterArray).<br>- Second adds items count for each element that contain an array, after filtering, if needed.
 *
 * @param {Array} array
 * @param {String[]} args
 * @param {String} filteringKey
 *
 * @returns {Array}
 */
const processArray = (array, args, filteringKey) => {
    const preprocessedArguments = preprocessArguments(args);

    const filteredArray = preprocessedArguments.filters.length > 0
        ? filterArray(array, preprocessedArguments.filters, filteringKey)
        : array;

    return (preprocessedArguments.count) ? countArray(filteredArray) : filteredArray;
};

module.exports = {
    processArray,
};
