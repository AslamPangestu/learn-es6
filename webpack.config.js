const path = require('path');

module.exports = {
    entry:path.resolve(__dirname,'src'),
    output:{
        path:path.resolve(__dirname,'build'),//build folder location
        filename:'bundle.js'//build file
    }
};
