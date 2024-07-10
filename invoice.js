import {Inventory} from "./inventory.js";
import {ProductCalculatorFactory} from "./product.js";

class Position {
    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }

    calculate () {
        const productCalculator = ProductCalculatorFactory.create(this.product);
        return productCalculator.calculate(this.amount);
    }

    toString(format) {
        return `${this.product.name}: ${format(this.calculate())} (${this.amount} Stück)\n`;
    }
}

export default class InvoiceCalculator {
    generateInvoice(invoice, products) {
        const inventory = new Inventory(products)
        let totalAmount = 0;
        let result = `Abrechnung für ${invoice.customer}\n`;

        for (let product of invoice.positions) {
            const position = new Position(inventory.getProduct(product.productId), product.amount);
            result += position.toString(this.getFormat());
            totalAmount += position.calculate();
        }
        result += `Rechnungsbetrag ${this.getFormat()(totalAmount)}\n`;

        return result;
    }

    getFormat() {
        return new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format;
    }
}
