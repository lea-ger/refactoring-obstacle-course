
export class ProductCalculatorFactory {
    static create(product) {
        const {type, price} = product;
        if (type === "photo") {
            return new PhotoProductCalculator(price);
        } else if (type === "poster") {
            return new PosterProductCalculator(price);
        } else {
            throw new Error(`Unbekannter Typ: ${type}`);
        }
    }
}

class ProductCalculator {
    constructor(price) {
        this.price = price;
    }

    calculate(amount) {
        return this.price * amount;
    }
}

export class PhotoProductCalculator extends ProductCalculator {
    calculate(amount) {
        if (amount >= 100) {
            return this.price * amount * 0.8;
        } else {
            return super.calculate(amount);
        }
    }
}

export class PosterProductCalculator extends ProductCalculator {
}