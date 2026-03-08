const { BasePage } = require('./BasePage');

class HomePage extends BasePage {

constructor(page){
    super(page);
    this.searchBox = '#gh-ac';
    this.searchButton = '#gh-search-btn';
}

async searchProduct(product){
    await this.fill(this.searchBox, product);
    await this.click(this.searchButton);
}

}

module.exports = { HomePage };