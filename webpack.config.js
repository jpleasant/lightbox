const path = require('path');

const config = {
 
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "index.js"
    },
    module: {
        rules: [
         
            { test: /\.css$/, use: 'css-loader' },
            {
                
                test: /\.js$/,
                use: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
                ]
    },
    
};

module.exports = config;

