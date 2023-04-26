const fnA = function (params) {
  const innerVar = 'Value of internal variable in function fnA';

  const innerFunction = function () {
    console.log(innerVar);
    console.log('This call innerFunction');
  };

  return innerFunction;
};

// const fnB = fnA();

// fnB();

// console.log(fnB);

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} cooking ${dish}`);
// };

// makeDish('Mango', 'patty');
// makeDish('Mango', 'omelet');
// makeDish('Mango', 'tea');

// makeDish('Poly', 'meatballs');
// makeDish('Poly', 'soup');
// makeDish('Poly', 'coffe');

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} cooking ${dish}`);
//   };

//   return makeDish;
// };

// const mango = makeSheff('Mango');
// const poly = makeSheff('Poly');

// mango('patty');
// mango('omelet');
// mango('tea');
// poly('meatballs');
// poly('patty');

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(3.4567, 1));
// console.log(rounder(3.4567, 4));

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);
// const rounder1 = rounder(1);
// const rounder4 = rounder(4);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder1(3.4567));
// console.log(rounder4(3.4567));

const salaryManegerFactory = function (employeName, baseSalary) {
  let salary = baseSalary;

  //   const changeBy = function (amount) {
  //     salary += amount;
  //   };

  return {
    raise(amount) {
      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Current salary ${employeName} - ${salary}`;
    },
  };
};

const salaryManeger = salaryManegerFactory('Mango', 5000);

console.log(salaryManeger);
console.log(salaryManeger.current());
salaryManeger.lower(2000);
console.log(salaryManeger.current());
salaryManeger.raise(5000);
console.log(salaryManeger.current());
