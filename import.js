require('babel-polyfill');
const SiteClient = require('datocms-client').SiteClient;

const client = new SiteClient('7eaa34f7f66143ed8664');

var json = require('./gcmcar.json');
// console.log(json);

client.fields.all("13957")
.then((fields) => console.log(fields));



for(var i = 0; i < json.length; i++){
  const Productpage_image = json[i].Productpage_image;
  const Title = json[i].Title;
  const Catalog_ID = json[i].Catalog_ID;
  const Year = json[i].Year;
  const Platform = json[i].Platform;
  const Price = json[i].Price;
  const Engine = json[i].Engine;
  const Make = json[i].Make;
  const Body_type = json[i].Body_type;
  const Description = json[i].Description;
  const Sendowl = json[i].Sendowl;
  const Manual_type = json[i].Manual_type;
  const Serie = json[i].Serie;
  const Download_ID = json[i].Download_ID;
  const Fuel_type = json[i].Fuel_type;
  // console.log(Title);
  client.uploadImage(Productpage_image)
  .then((image) => {
    return client.items.create({
      itemType: '13957',
      manual_id: Catalog_ID,
      manual_title: {
        en: Title,
        id: Title
      },
      manual_description: {
        en: Description,
        id: Description
      },
      manual_price: {
        en: Price,
        id: Price
      },
      manual_image: image,
      manual_serie: {
        en: Serie,
        id: Serie
      },
      manual_platform: {
        en: Platform,
        id: Platform
      },
      manual_brand: {
        en: Make,
        id: Make
      },
      manual_year: {
        en: Year,
        id: Year
      },
      manaul_engine: {
        en: Engine,
        id: Engine
      },
      manual_body_type: {
        en: Body_type,
        id: Body_type
      },
      manual_fuel_type: {
        en: Fuel_type,
        id: Fuel_type
      },
      manual_type: {
        en: Manual_type,
        id: Manual_type
      },
      manual_download_id: {
        en: Download_ID,
        id: Download_ID
      },
      sendowl: {
        en: Sendowl,
        id: Sendowl
      }
    })
  })
  .then(record => console.log("ok"));
}
