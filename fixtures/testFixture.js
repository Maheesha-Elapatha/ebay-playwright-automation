const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');

exports.test = test.extend({

homePage: async ({ page }, use) => {
    await use(new HomePage(page));
},

productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
}

});