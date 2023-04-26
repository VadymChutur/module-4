// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Полі', takeCall, leaveHoloMessage);

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log('Log fnB', number);
// };

// fnA('Log fnA', fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// // const add = function (x, y) {
// //   return x + y;
// // };

// // const sub = function (x, y) {
// //   return x - y;
// // };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(2, 3, function (x, y) {
//   return x - y;
// });

// const buttonRef = document.querySelector('.js-button');

// console.log(buttonRef);

// buttonRef.addEventListener('click', function () {
//   console.log('magik');
// });

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

// const callback = function (value) {
//   return value >= 3;
// };

// console.log(filter([1, 2, 3, 4, 5], callback));
// console.log(
//   filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//     return value <= 4;
//   })
// );

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const r3 = filter(fruits, function (fruit) {
  return fruit.quantity >= 120;
});

console.log(r3);

const r4 = filter(fruits, function (fruit) {
  return !fruit.isFresh;
});

console.log(r4);
