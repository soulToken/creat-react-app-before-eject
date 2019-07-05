const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy,
  addLessLoader
} = require("customize-cra");

const path = require("path");
const fs = require("fs");

const addCustomize = () => config => {
  // 删除默认的file-loader
  config.module.rules[2].oneOf.splice(
    config.module.rules[2].oneOf.length - 1,
    1
  );

  // 添加url-loader
  const urlLoader = {
    test: /\.(eot|woff2?|ttf|svg)$/,
    exclude: path.resolve(__dirname, "./src/assets/icons"), //不处理指定svg的文件
    use: [
      {
        loader: "url-loader",
        options: {
          name: "[name]-[hash:5].min.[ext]",
          limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
          outputPath: "font",
          publicPath: "font"
        }
      }
    ]
  };

  // 添加svg-sprite-loader
  const svgSpriteLoader = {
    test: /\.svg$/,
    loader: "svg-sprite-loader",
    include: path.resolve(__dirname, "./src/assets/icons"), // //只处理指定svg的文件
    options: {
      symbolId: "icon-[name]"
    }
  };

  // 添加file-loader
  const fileLoader = {
    loader: require.resolve("file-loader"),
    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
    options: {
      name: "static/media/[name].[hash:8].[ext]"
    }
  };

  config.module.rules[2].oneOf.push(urlLoader);
  config.module.rules[2].oneOf.push(svgSpriteLoader);
  config.module.rules[2].oneOf.push(fileLoader);

  return config;
};

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: true 
  }),
  addWebpackAlias({
    // components: path.resolve(__dirname, 'src/conponents'),
    "@": path.resolve("src")
  }),

  addDecoratorsLegacy(),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars:  {
      "@brand-primary": "blue",
      "@color-text-base": "red"
    }
  }),

  addCustomize()
);

