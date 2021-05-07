const mix = require("laravel-mix");

mix.browserSync("laravel.test");
mix
  .ts("resources/ts/index.tsx", "public/js")
  .sass("resources/sass/app.scss", "public/css")
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
  });
