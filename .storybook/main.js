const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
  ],
  webpackFinal: async (config, { configType }) => {

    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, '../'),
      },

      // {
      // 	test: /\.vue$/,
      // 	include: path.resolve(__dirname, '../src'),
      // 	loader: 'vue-loader',
      // 	options: {
      // 		loaders: {
      // 			scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
      // 			sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
      // 		}
      // 	}
      // }
    );

    return config;
  },
}
