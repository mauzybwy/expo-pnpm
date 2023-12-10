process.env.EXPO_ROUTER_APP_ROOT = '../../pages';

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            'assets': './assets',
            'utils': './utils',
          },
        },
      ],
    ],
  };
};
