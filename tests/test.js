import test from 'node:test'
import InvoiceCalculator from "../invoice.js";
import assert from 'node:assert'

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

test('test invoice calculator', function () {
    const calculator = new InvoiceCalculator()

    assert.strictEqual(calculator.generateInvoice(invoice, products), `Abrechnung für Stefanie Musterfrau
DIN A6 Fotodruck: 38,40 € (120 Stück)
DIN A6 Fotodruck im Vintage-Stil: 17,50 € (35 Stück)
A3 Poster: 60,00 € (4 Stück)
Rechnungsbetrag 115,90 €
`)
})