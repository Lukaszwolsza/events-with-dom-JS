// const createTaxCalc = tax =>{
//     const caclulateTax = amount =>{
//         return amount * tax;
//     };
//     return caclulateTax;
// };

// const calculateVatAmount = createTaxCalc(0.25);
// const calculateIncomeTaxAmount = createTaxCalc(0.19);

// console.log(calculateVatAmount(200));
const headerDivHomeBtn = document.getElementById('#header');

const randomNumberDisplayed = document.querySelector('#randNum');
const randomTheNumberBtn = document.querySelector('#randomTheNumberBtn');
const resultOfRandom = document.querySelector('#resultOfRandom');

let counter = 1;

const randomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const showRandomizeNumber = () => {
    const h3 = document.createElement('h3');
    h3.innerText = counter + '. Random number is : ';

    const span = document.createElement('span');
    span.setAttribute('id','randNum');
    span.innerText =  randomNumber(1,100);

    resultOfRandom.append(h3);
    h3.append(span);
    counter++;
};

randomTheNumberBtn.addEventListener('click', showRandomizeNumber);
