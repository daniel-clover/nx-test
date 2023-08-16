const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (config) => {
  const cssRule = config.module.rules.find((rule) =>
    rule.test.toString().includes('css')
  );

  const rulesWithoutCss = config.module.rules.filter(
    (rule) => !rule.test.toString().includes('css')
  );

  const rules = [
    ...rulesWithoutCss,
    {
      ...cssRule,
      oneOf: [
        {
          test: /\\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: require.resolve('css-loader'),
              options: {
                url: false // Required as image imports should be handled via JS/TS import statements
              }
            }
          ]
        },
        ...cssRule.oneOf
      ]
    }
  ];

  return {
    ...config,
    plugins: [...config.plugins],
    module: {
      ...config.module,
      rules
    }
  };
};
