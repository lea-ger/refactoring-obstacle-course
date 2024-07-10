export class Inventory {
    constructor(products) {
        this.products = products;
    }

    getProduct(id) {
        return this.products[id];
    }
}