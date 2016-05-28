console.log('cwd', process.cwd());
var path = require('path');
module.exports = {
    entry: {page1: './b.js', page2: './c.js'},
    output: {
        libraryTarget: "umd",
        path: __dirname + "/demo/multiple-entry/dist",
        publickPath: '/publickPath',
        filename: "[name].bundle.js",
        // filename: "[name].[hash].bundle.js",
        chunkFilename: "[chunk].chunk.js"
    },
    externals: [
        "add",
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
