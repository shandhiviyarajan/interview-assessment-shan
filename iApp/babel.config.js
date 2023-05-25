module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './components',
          screens: './components/screens',
          core: './core'
        }
      }
    ]
  ]
};
