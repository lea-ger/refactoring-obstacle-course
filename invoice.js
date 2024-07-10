export default class InvoiceCalculator {
    generateInvoice(invoice, products) {
        let totalAmount = 0;
        const locale = "de-DE";
        let result = `Abrechnung für ${invoice.customer}\n`;
        const format = new Intl.NumberFormat("de-DE",
            {
                style: "currency", currency: "EUR",
                minimumFractionDigits: 2
            }).format;

        for (let product of invoice.positions) {
            let out = this.calculateAndPrint(product, products, result, format, totalAmount);
            result = out.result;
            totalAmount = out.totalAmount;
        }
        result += `Rechnungsbetrag ${format(totalAmount)}\n`;

        return result;
    }

    calculateAndPrint(prod, products, result, format, totalAmount) {
        const product = products[prod.productId];
        let thisAmount = 0;
        if (product.type === "photo" && prod.amount >= 100) {
            thisAmount += product.price * prod.amount * 0.8;
        } else if (product.type === "photo") {
            thisAmount += product.price * prod.amount;
        } else if (product.type === "poster") {
            thisAmount += product.price * prod.amount;
        } else {
            throw new Error(`Unbekannter Typ: ${product.type}`);
        }
        result += `${product.name}: ${format(thisAmount)} (${prod.amount} Stück)\n`;
        totalAmount += thisAmount;
        return {totalAmount, result};
    }
}
