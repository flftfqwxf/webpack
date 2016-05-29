console.log('cwd', process.cwd());
var path = require('path');
module.exports = {
    //此项设置【entry】参数内路径的位置,此值必须为【物理绝对路径】,默认值为:process.cwd(),当前WEBPACK命令运行的绝对路径
    context: path.resolve(__dirname, 'demo'),//
    //此入entry中所有入口路径都会添加 ./demo前缀,即 page1:'./demo'+"multiple-entry/b.js"
    entry: {page1: './multiple-entry/b.js', page2: './multiple-entry/c.js'},
    output: {
        libraryTarget: "umd",
        path: __dirname + "/demo/multiple-entry/dist",
        publickPath: '/publickPath',
        filename: "[name].bundle.js",
        // filename: "[name].[hash].bundle.js",
        chunkFilename: "[chunk].chunk.js"
    }
}
