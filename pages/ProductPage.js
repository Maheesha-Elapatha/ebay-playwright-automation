const { BasePage } = require('./BasePage');

class ProductPage extends BasePage {

constructor(page){
    super(page);

    this.productLink = '//div[contains(@class,"su-media__image")]//a[contains(@class,"s-card__link")]';

    this.relatedSection = 'section:has-text("Related")';

    this.relatedItems = 'section:has-text("Related") .s-item';
}

async openFirstProduct(){

    await this.page.waitForSelector(this.productLink);

    const firstProduct = this.page.locator(this.productLink).nth(2);

    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        firstProduct.click({ force: true })
    ]);

    await newPage.waitForLoadState();

    return newPage;
}

async isRelatedSectionVisible(){

    return await this.page.locator(this.relatedSection).isVisible();

}

async getRelatedProductsCount(){

    return await this.page.locator(this.relatedItems).count();

}

}

module.exports = { ProductPage };