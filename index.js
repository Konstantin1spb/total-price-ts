"use strict";
const totalPrice = ({ price, discount, isInstallment, months }) => {
    let resultPrice = price * (1 - discount / 100);
    if (isInstallment) {
        resultPrice /= months;
        return resultPrice;
    }
    return resultPrice;
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
