console.log('cwd', process.cwd());
var path = require('path');
module.exports = {
    entry: {page1: './a.js'},
    output: {
        //将包作为库导出//
        //说明,如果设置的此项,当你在页面中引用了导出的JS时,可以用【myLibray】名字还访问此库
        //这样做的目的,是如果你写的是一些公司组件,可以导出到全局上,以方便其他地方使用,
        //比如,在此示例中的a.js定义的export,可以通过m【yLibray.add】来访问
        library:'myLibray',

        //说明:当你在页面中直接通过 <script src="mylibrary"></script>等引入第三库时,
        // 并且在代码中依然使用var $=require('mylibrary')来引用 ,
        // 由于第三库可能有不同的输出类型,比如:
        //如果是依赖于requirejs的库,输出类型为amd,那么webpack在编译代码时,必须将依赖转换成可以被requirejs识别的defined()格式
        //如果第三库中是commonjs库,则webpack编译时,必须将第三方依赖转换为commonjs格式如 exports[xxx]或moudle.exports=xxx
        //所以需要根据需求指定其转换的类型,
        //   //
        //exported时,第三库匹配的类型,有下类型:
        //https://github.com/webpack/webpack/tree/master/examples/externals
        // "var" - 导出适合全局变量的包: var Library = xxx (default)
        // "this" - 导出适合全局属性的包: this["Library"] = xxx
        // "commonjs" - 导出适合commonjs格式的包: exports["Library"] = xxx
        // "commonjs2" - 导出适合commonjs2格式的包: module.exports = xxx
        // "amd" - 导出适合AMD规范的包,比如SEAJS或requireJS (optionally named - set the name via the library option)
        // "umd" - 导出适合 AMD, CommonJS2 or 全局属性 的包
        //默认值为: "var",
        // 默认最稳妥的方式是使用【umd】格式,支持目前类型转换
        libraryTarget: "umd",
        path: __dirname + "/dist",
        publickPath: '/publickPath',
        filename: "[name].bundle.js",
        // filename: "[name].[hash].bundle.js",
        chunkFilename: "[chunk].chunk.js"
    },
    externals: [
        //此处【add】会去获取在页面中,通过script标签加载的第三方库返回同名为 add 的全局变量
        "add",
        {
            //也可以手动去修改名字
            "del": "DEL",
            'jquery':'jQuery'
        },

        // {
        //     "subtract": {
        //         root: "subtract",
        //         commonjs2: "./subtract",
        //         commonjs: ["./math", "subtract"],
        //         amd: "subtract"
        //     }
        // }
    ]
}
