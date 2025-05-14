// Promise

// Статусы:
// fulfilled - удовлетворен
// rejected - отклонено
// pending - ожидание

// сначала pending - а потом по обстоятельствам - либо fulfilled, если все ок
// либо rejected - если возникла ошибка или проблема

//

// Создаем промис, которые возвращает нам бургер

const burgerPromise = new Promise(function (resolve, rejected) {
  setTimeout(() => {
    resolve("Tasty burger");
  }, 3000);
});

console.log(burgerPromise); // Promise { <pending> }

// подождать значение === раскрыть промис
//
burgerPromise.then((burger) => {
  console.log("Внутри колбека: ", burger);
});

console.log("Вне колбека бургер: ", burgerPromise);

// Reject

const badPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("The kitchen is on fire"));
  }, 3000);
});

badPromise
  .then((burger) => {
    console.log(burger);
  })
  .catch((err) => {
    console.log(err.message);
  });

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// console.log(getRandomNumber(2));

// Here is your 3D printer
// Error: "You didnt behave this year!"
const printerPresent = new Promise(function (res, rej) {
  setTimeout(() => {
    if (getRandomNumber(2)) {
      res("Here is your 3D printer");
    }
    rej(new Error("You didn't behave this year!"));
  }, 2000);
});

printerPresent
  .then((present) => {
    console.log(present);
  })
  .catch((err) => {
    console.log(err.message);
  });



// // написали функцию для генерации простых чисел
// function getRandomNumber(max) {
//   return Math.floor(Math.random() * max);
// }

// // Here is your 3D printer
// // Error: "You didn't behave this year!"

// const printerPresent = new Promise(function (res, rej) {
//   setTimeout(() => {
//     if (getRandomNumber(2)) {
//       res("Here is your 3D printer");
//     }
//     rej(new Error("You didn't behave this year!"));
//   }, 2000);
// });

// printerPresent
//   .then((present) => {
//     console.log(present);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
