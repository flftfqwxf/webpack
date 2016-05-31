var path = require("path");
//我将webpack装在了全局,所以这里引用完整路径
var webpack = require("/usr/local/lib/node_modules/webpack");
module.exports = {
    entry: {
        main: "./example",
        vendor: ["./vendor"],
        common: ["./jquery"]
        // optional
    },
    output: {
        path: path.join(__dirname, "js"),

        filename: "[name].chunkhash.js",
        // filename: 'bundle.js',
        chunkFilename: "[chunkhash].js"
    },
    plugins: [
        /**
         * 1)
         * 提示公共模块插件
         * 此插件只对多个【entry】入口时有效,他会把各个入口内所用的的模块进行分析,
         * 如果不同入口内有相同的模块就进行公共提取
         * 如果只有一个入口,不会做提取操作
         *
         * 如果报以下错误:
         Conflict: Multiple assets emit to the same filename 'bundle.js'
         1)解决办法可能有,指定 output.filename的值不等于,这两种格式 :【output.filename=固定名字,或 [hash]+固定字符串时】:
         2)指定 name的入口文件键名为entry中的键名的一个
         3)指定 filename参数
         */
        new webpack.optimize.CommonsChunkPlugin({
            /**
             *
             //name 是配置文件里面入口文件的键名,如果多个名字,相当于在多个入口进行处理

             即[entry]中 vendor:['jquery']中的[vendor],对应[name]的名字
             当 【output.filename=固定名字,或 [hash]+固定字符串时】:
                示例:  output.filename="bundle.js" or output.filename=[hash].bundle.js
             name参数必须与 output.filename的某个入口参数一致
             */
            /**
             * 多个入口与单个入口的区别,
             * 在于单个入口时,webpack会把其他入口的公共部分提取出来放到这个入口生成的文件中
             * 而多个入口则不会,比如:
             * entry:{
             *  a:"a.js",
             *  b:"b.js",
             *  c:"c.js"
             * }
             * 当names:["b"],时
             * 最后生成的文件会包括 c的内容+a+b的公共部分
             * 当 names:["b","c"] 生成的两个文件 不会包含彼此的公共内容
             * 在使用时建议只使用一个入口,webpac文档超烂,超多坑,乱用要出错
             *
             */
            names: ["common"],

            
            /**
             *
             filename 是输出的文件名
             */
            // filename: ["commonsuuu.js"],
            /**
             * 最少3个文件同时使用某个块时,才提示为该模块为公共,默认为【2】
             */
          //  minChunks: 2,
            /**
             * 将多个子模块内共用的模块,移到他们的父模块内
             */
           // children: true,
            //设置最小公共模块大小
           // minChunks:1000

        })
        // without the "common" chunk:
        //  new webpack.optimize.CommonsChunkPlugin({
        //  name: "manifest"
        //  })
    ]
};