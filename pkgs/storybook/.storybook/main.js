const appdir = require.resolve('@org/app');

module.exports = {
  stories: [
    appdir + "/../components/**/*.stories.mdx",
    appdir + "/../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
};
