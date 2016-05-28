console.log('cwd', process.cwd());
var path = require('path');
console.log('url>>>>>>',path.join(process.cwd(), "node_modules"))
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
    module:{
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css","sass"],
                exclude: /node_modules/,
            }
        ],
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
    ],
    // resolveLoader: { root: path.join(__dirname, "node_modules") }
}
