console.log('cwd', process.cwd());
var path = require('path');
module.exports = {
    //此入entry中所有入口路径都会添加 ./demo前缀,即 page1:'./demo'+"multiple-entry/b.js"
    entry: {'out': './app.js'},
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        // filename: "[name].[hash].bundle.js",
        chunkFilename: "[chunk].chunk.js"
    },
    module:{
        loaders: [

            {
                loader: 'babel-loader',
                test: /\.js$/,
                query: {
                    // presets: 'es2015',
                },
                exclude: /node_modules/
            }
        ]
    },
    /**
     * loaders query的另一种写法
     *  loaderName :{
     *     queryName:queryValue
     *  }
     *  
     */
    babel:{
        presets:'es2015'
    }

}
