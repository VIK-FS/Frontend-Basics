let x;

setTimeout(() => {
  x = 10;
  //   console.log(x);
}, 0);

console.log(x);

// Intervals

const printHello = () => {
  console.log("hello");
};

const printHelloInterval = setInterval(printHello, 1500);

// остановит повторения через 10 секунд
const timeout = setTimeout(() => {
  clearInterval(printHelloInterval);
}, 10_000);

