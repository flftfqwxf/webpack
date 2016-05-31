var webpack = require("/usr/local/lib/node_modules/webpack");
module.exports = {
    entry: {
        app: './main.js',
        vendor: ['../jquery'],
    },
    output: {
        filename: "[chunkhash].chunkhash.js",
    },
    plugins: [
        /**
         *
         name 是配置文件里面入口文件的键名，filename 是输出的文件名
         即[entry]中 vendor:['jquery']这个入口,对应[name]的名字
         name参数对应不一致或 filename未指定皆会报错
          Conflict: Multiple assets emit to the same filename 'bundle.js'
         */
        new webpack.optimize.CommonsChunkPlugin(
            {name: 'vendor'})
    ]
};
