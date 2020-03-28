module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        targets: ['last 2 versions', 'IE 11'],
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
