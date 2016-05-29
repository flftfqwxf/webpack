var path = require('path');
module.exports = {
    //此项设置【entry】参数内路径的位置,此值必须为【物理绝对路径】,默认值为:process.cwd(),当前WEBPACK命令运行的绝对路径
    // context: path.resolve(__dirname),//
    // resolveLoader: { root: path.join(process.cwd(), "node_modules") },
    entry: {page1: './a.js'},
    output: {
        path: __dirname + "/dist",
        publickPath: '/publickPath',
        filename: "[name].bundle.js",
        // filename: "[name].[hash].bundle.js",
        chunkFilename: "[chunk].chunk.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        /**
         * 定义别名
         */
        alias: {
             jq:'./jquery-1.10.2.js'
        },

        /**
         * 查找module的路径,说明:
         //如果你的模块放在不同的目录下,又不想通过不同的路径来引入,那么
         * 那么可以将多个【绝对物理路径】写入此参数
         * 比如:
         *  modules/a.js 模块a
         *  page/b.js 模块b
         *  通常情况下,如果你没有设置 【alias】,则引入的时候需要如下写法:
         *  require('modules/a') require('page/b')
         *  但如果你将此两个目录放入到root中,
         *  root:[path.join(__dirname, 'modules')],path.join(__dirname, 'page')]]
         *  webpack将会把这两个目录作为模块目录加以扫描
         *  将可以用以下写法:
         *  require('a') require('b')
         *
         */
        root: [ path.join(__dirname, 'modules')],
        /**
         * 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
         * 后缀定义时,webpack定义的顺序,是根据数组的顺序,从左到右解析,即以下面示例
         * 如果JS中使用: require('a')
         * WEBPACK会先尝试查找不带后缀的a模块,如果未找到再找 [a.scss]模块,以此类推
         * 故需要特别注意如果模块名及路径相同的情况,需要考虑其顺序
         * 建议最好在引用时加上后缀,以免出现意外
         */
        extensions: ['', '.scss', '.js', '.css']
    }
}
