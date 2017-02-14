// Register static files here

/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./favicon.ico'
import '!file-loader?name=[name].[ext]!./manifest.json'
import 'file-loader?name=[name].[ext]!./.htaccess' // eslint-disable-line import/extensions
/* eslint-enable import/no-webpack-loader-syntax */
