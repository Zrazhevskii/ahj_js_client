// const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   devtool: "source-map",
//   target: "web",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     publicPath: "",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: "html-loader",
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader"],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource",
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./src/index.html",
//       filename: "./index.html",
//     }),
//     new MiniCssExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css",
//     }),
//   ],
// };

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Основной файл
  entry: './src/index.js',
  // source map нужен для отладки JavaScript-кода в браузере.
  devtool: 'source-map',
  // Указывае тна тип приложения, в данном слкчае web (работает в браузере)
  target: 'web',
  // Выходные параметры сборки
  output: {
    // Название для файла JS содержащего конечную сборку.
    filename: 'bundle.js',
    // путь к папке, где будут сохранены собранные файлы.
    path: path.resolve(__dirname, 'dist')
  },
  // правила для обработки JavaScript
  module: {
    rules: [
        // правило применяется для .js файлов
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // используется загрузчик Babel
          loader: "babel-loader",
        },
      },
        // Правило для .html файлов
      {
        test: /\.html$/,
        use: [
          {
            // стандартный обработчик html из webback
            loader: "html-loader",
          },
        ],
      },
        // Правило для .css файлов
      {
        test: /\.css$/,
        // Здесь два загрузчика для обработки CSS.
        // css-loader позволяет Webpack понимать и импортировать файлы CSS в JavaScript-коде.
        // MiniCssExtractPlugin.loader извлекает CSS из JavaScript и сохраняет его в
        // отдельный файл.
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
        // Правило применяется для файлов с расширениями .png, .svg, .jpg, .jpeg и .gif
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  // Плагины для дополнительной функциональной обработки
  plugins: [
      // Плагин создает HTML-файл на основе указанного шаблона
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
      // Плагин извлекает CSS из JavaScript-файла и сохраняет его в отдельный CSS-файл.
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ]
};
