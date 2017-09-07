

module.exports = (dato, root, i18n) => {
  // console.log(dato.landingPages);
  root.directory("content/landpage", (articlesDir) => {
    i18n.availableLocales.forEach((locale) => {
      i18n.withLocale(locale, () => {
        dato.landingPages.forEach((landingPages) => {
          articlesDir.createPost(
            `${landingPages.lpUrl}.${locale}.md`, "yaml", {
              frontmatter: {
                title: landingPages.lpBrand,
                model: landingPages.lpModel,
                engine: landingPages.lpEngine,
                lpurl: landingPages.lpUrl,
                image: landingPages.image.toMap(),
                id: "landpage"
              },
              content: landingPages.lpBrand
            }
          );
        });
      });
    });
  });
  // console.log(dato.manuals);.

  root.directory("content/manual", (articlesDir) => {
    i18n.availableLocales.forEach((locale) => {
      i18n.withLocale(locale, () => {
        dato.manuals.forEach((Manuals, i) => {
          articlesDir.createPost(
            `${Manuals.manualId}.${locale}.md`, "yaml", {
              frontmatter: {
                product_id: Manuals.manualId,
                title: Manuals.manualTitle,
                product_price: Manuals.manualPrice,
                image: Manuals.manualImage.toMap(),
                series: Manuals.manualSerie,
                platiform: Manuals.manualPlatform,
                brand: Manuals.manualBrand,
                year: Manuals.manualYear,
                engine: Manuals.manaulEngine,
                body_type: Manuals.manualBodyType,
                fuel_type: Manuals.manualFuelType,
                manual_type: Manuals.manualType,
                download_id: Manuals.manualDownloadId,
                send_owl: Manuals.sendowl,
                id: "singleproduct",
                productcategories: Manuals.manualBrand
              },
              content: Manuals.manualDescription
            }
          );
        });
      });
    });
  });

  var myall = []
  i18n.withLocale('en', () => {
    i18n.locale = 'en';              // => "it"
    dato.manuals.forEach((Manuals, i) => {
      var content = Manuals.entity.payload.attributes;
      myall.push(content)
    });
  });
  // console.log(myall);
  root.createDataFile(`data/data.json`, 'json', myall)

  // console.log(headerMenus.menuItem.pageDescription);
  root.directory("content/headermenus", (articlesDir) => {
    i18n.availableLocales.forEach((locale) => {
      i18n.withLocale(locale, () => {
        dato.headerMenus.forEach((headerMenus, i) => {
          articlesDir.createPost(
            `${headerMenus.menuItem.slugurl}.${locale}.md`, "yaml", {
              frontmatter: {
                title: headerMenus.menuItem.pageTitle,
                url: headerMenus.menuItem.slugurl,
                icon: headerMenus.menuItem.pageIcon,
                weight: `${i}`,
                type: "menu"
              },
              content: headerMenus.menuItem.pageDescription
            }
          );
        });
      });
    });
  });

  // console.log(dato.footer);
  root.directory("content/footer", (articlesDir) => {
    i18n.availableLocales.forEach((locale) => {
      i18n.withLocale(locale, () => {
          articlesDir.createPost(
            `footer.${locale}.md`, "yaml", {
              frontmatter: {
                title: "Footer"
              },
              content: dato.footer.footerDescription
            }
          );
      });
    });
  });

  // console.log(dato.blogs);
  root.directory("content/blogs", (articlesDir) => {
    i18n.availableLocales.forEach((locale) => {
      i18n.withLocale(locale, () => {
        dato.blogs.forEach((Blog, i) => {
          articlesDir.createPost(
            `${Blog.slugUrl}.${locale}.md`, "yaml", {
              frontmatter: {
                title: Blog.blogTitle,
                type: "blog",
                blogimage: Blog.thumbnailImage.toMap(),
                imagegallery: Blog.blogGallery.toMap(),
                templatename: Blog.chooseTemplate.templateName,
                url: Blog.slugurl,
                date: Blog.addDate,
                comments: true
              },
              content: Blog.blogDesc
            }
          );
        });
      });
    });
  });

}
