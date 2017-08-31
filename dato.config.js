module.exports = (dato, root, i18n) => {
  // console.log(dato.landingPages);
  dato.landingPages.forEach((landingPages, i) => {
    root.createPost(`content/landpage/${landingPages.lpUrl}.md`, "yaml",{
      frontmatter: {
        title: landingPages.lpBrand,
        model: landingPages.lpModel,
        engine: landingPages.lpEngine,
        lpurl: landingPages.lpUrl,
        id: landingPages.template.templateName,
        image: landingPages.image.toMap()
      },
      content: landingPages.lpBrand
    });
  });
  // console.log(dato.manuals);.
  root.directory("content/manual", (articlesDir) => {
    i18n.availableLocales.forEach((locale) => {
      i18n.withLocale(locale, () => {
        dato.manuals.forEach((Manuals) => {
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
                id: "singleproduct"
              },
              content: Manuals.manualDescription
            }
          );
        });
      });
    });
  });
}
