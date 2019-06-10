const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'clp',
    umdNamedDefine: true,
	  libraryExport: 'default'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9887
  }
};
