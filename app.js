const {
    processArray,
} = require('./src/functions');

const {
    data,
} = require('./data');

const FILTERING_KEY = 'animals';

console.log(processArray(data, process.argv.slice(2), FILTERING_KEY));
