const createTaxCalc = tax =>{
    const caclulateTax = amount =>{
        return amount * tax;
    };
    return caclulateTax;
};

const calculateVatAmount = createTaxCalc(0.25);
const calculateIncomeTaxAmount = createTaxCalc(0.19);

console.log(calculateVatAmount(200));