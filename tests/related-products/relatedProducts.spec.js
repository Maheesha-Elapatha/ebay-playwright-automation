const { expect } = require('@playwright/test');
const { test } = require('../../fixtures/testFixture');
const { testData } = require('../../utils/testData');

test('Verify related products section appears', async ({ page, homePage, productPage }) => {

    await page.goto('https://www.ebay.com');

    await homePage.searchProduct(testData.product);

    const productTab = await productPage.openFirstProduct();

    const visible = await productTab.locator('section:has-text("Similar items")').isVisible();

    expect(visible).toBeTruthy();

});


test('Verify max 6 related products displayed', async ({ page, homePage, productPage }) => {

    await page.goto('https://www.ebay.com');

    await homePage.searchProduct(testData.product);

    const productTab = await productPage.openFirstProduct();

    const relatedItems = productTab.locator('section:has-text("Similar items") .s-item');

    const count = await relatedItems.count();

    expect(count).toBeLessThanOrEqual(6);

});