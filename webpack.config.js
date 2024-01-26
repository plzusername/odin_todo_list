let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode:'development',
  devtool:'inline-source-map',
  devServer: {
    static: './src',
  },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Odin Todo app',
       template:'./src/index.html'
     }),
   ],
   module:{
    rules:[
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for processing CSS
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
   }
};