const path = require('path');

module.exports = {
  entry: './themes/hilde/src/js/hilde.js',
  output: {
    filename: 'hilde.min.js',
    path: path.resolve(__dirname, 'themes', 'hilde', 'static', 'js')
  }
}
