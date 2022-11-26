module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"], // resolve conflicts between @react-navigation/drawer and react-native-reanimated@2
  };
};
