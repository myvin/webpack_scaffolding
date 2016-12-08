var webpack = require('webpack');
var devServer = require('webpack-dev-server');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
 
module.exports = {
    // 插件项
    // plugins: [commonsPlugin],
    // 页面入口文件配置
    entry: {
        index : __dirname + '/app/main.js'
    },
    // 入口文件输出配置
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        port: 5000,
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
    // module: {
    //     // 加载器配置
    //     loaders: [
    //         { test: /\.css$/, loader: 'style-loader!css-loader' },
    //         { test: /\.js$/, loader: 'jsx-loader?harmony' },
    //         { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
    //         { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    //     ]
    // },
    // // 其它解决方案配置
    // resolve: {
    //     root: 'E:/github/flux-example/src', //绝对路径
    //     extensions: ['', '.js', '.json', '.scss'],
    //     alias: {
    //         AppStore : 'js/stores/AppStores.js',
    //         ActionType : 'js/actions/ActionType.js',
    //         AppAction : 'js/actions/AppAction.js'
    //     }
    // }
};
