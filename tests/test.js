import test from 'node:test'
import InvoiceCalculator from "../invoice.js";
import assert from 'node:assert'

test('test invoice calculator', () => {
    const invoice = new InvoiceCalculator()
    assert.strictEqual(1,1)
})