console.log('cwd', process.cwd());
var path = require('path');
module.exports = {
    //此入entry中所有入口路径都会添加 ./demo前缀,即 page1:'./demo'+"multiple-entry/b.js"
    entry: {'out': './app.js'},
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        /**
         * 资源在浏览器中,被引用的路径,包括图片,CSS,JS模块等
         * 比如:在异步加载的模块加载时,模块的引用路径为当前地址的URL+模块名,即:
         * 如此例,当在index.html页面中引用生成后的【filename】时,
         * 加载异步模块也会在index.html的同级目录下寻找
         * 这就会出现问题,因为异步模块并没有与index.html输出在同一目录
         * 通过设置【publichPath】,指定资源在浏览器的输出路径,
         * 使其他引用模块的地方能够正确加载资源
         *
         *
         */
        publicPath:"./dist/",//如果此处注释掉,访问index.html时,将会出现404
        // filename: "[name].[hash].bundle.js",
        chunkFilename: "[chunkhash].chunk.js"
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
            }, {
                loaders: ['style','css'],
                test: /\.css$/,
               
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
