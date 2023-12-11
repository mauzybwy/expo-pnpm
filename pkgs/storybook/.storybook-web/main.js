const appdir = require.resolve('@org/app');

module.exports = {
  stories: [
    appdir + "/../components/**/*.stories.mdx",
    appdir + "/../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react-webpack5",

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
