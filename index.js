import InvoiceCalculator from "./invoice.js";

const invoice = {
    customer: "Stefanie Musterfrau",
    positions: [
        {
            productId: "a6",
            amount: 120
        },
        {
            productId: "a6-vintage",
            amount: 35
        },
        {
            productId: "a3",
            amount: 4
        }
    ]
}

const products = {
    "a6": { name: "DIN A6 Fotodruck", type: "photo", price: 0.4 },
    "a6-vintage": { name: "DIN A6 Fotodruck im Vintage-Stil", type: "photo", price: 0.5 },
    "a3": { name: "A3 Poster", type: "poster", price: 15 }
}

console.log(new InvoiceCalculator().generateInvoice(invoice, products));