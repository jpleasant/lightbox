module.exports = {
 
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "index.js"
    },
    module: {
        loaders: [
            //loaders plural when using multiple, singular when not
            {
                test: /\.js$/,
                exlude: 'node_modules/',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
                ]
    },
    
    resolve: {
        extensions: ['', '.js']
    }
};

