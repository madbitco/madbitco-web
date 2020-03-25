// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "MADBIT Co.",
  siteDescription:
    "Purposely tiny consultancy helping product people solve the right user problems through ingenious thinking and exceptional product design.",
  siteUrl: "",
  titleTemplate: "%s • MADBIT Co.",
  metadata: {
    author: "MADBIT Co.",
    twitter: {
      card: "summary",
      site: "@madbitco",
      creator: "@madbitco",
      url: "",
      title:
        "Purposely tiny consultancy helping product people solve the right user problems through ingenious thinking and exceptional product design."
    },
    robots: "index,follow,noodp",
    msvalidate: "FC69DA21918FCC1C7553AC8BECC030C9"
  },
  icon: {
    favicon: {
      src: "./src/images/favicon/favicon.png",
      sizes: [16, 32, 96, 128, 196]
    },
    touchicon: {
      src: "./src/my-touchicon.png",
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          outputStyle: "expanded",
          sourceMap: true,
          indentedSyntax: true,
          includePaths: [
            "node_modules/normalize-scss/sass",
            "node_modules/modularscale-sass/stylesheets",
            "node_modules/typi/scss",
            "node_modules/tachyons-sass"
          ]
        }
      }
    }
  },
  plugins: [],
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
