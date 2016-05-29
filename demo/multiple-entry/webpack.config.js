console.log('cwd', process.cwd());
var path = require('path');
module.exports = {
    //
    /**
     * 设置【entry】参数内路径的起始位置,
     * 此值必须为【物理绝对路径】,默认值为:process.cwd(),
     * 当前WEBPACK命令运行的绝对路径
     * 比如,当前 【context:path.resolve(__dirname, 'demo')】
     * entry中的所有路径都会加上 此入entry中所有入口路径都会添加 ./demo前缀,即 page1:'./demo'+"/b.js"
     */
    context: path.resolve(__dirname, 'demo'),
    //此入entry中所有入口路径都会添加 ./demo前缀,即 page1:'./demo'+"/b.js"
    entry: {page1: './b.js', page2: './c.js'},
    output: {
        path: __dirname + "/dist",
        publickPath: '/publickPath',
        filename: "[name].bundle.js",
        // filename: "[name].[hash].bundle.js",
        chunkFilename: "[chunk].chunk.js"
    }
}
