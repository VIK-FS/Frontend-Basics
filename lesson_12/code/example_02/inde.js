const leon = {
  name: "Leon",
  sayHallo() {
    console.log(`Hello, I am ${this.name} `);
  },
};

leon.sayHallo();

leon.name = "Leonid Igorevich";

leon.sayHallo();

// example Circle

// const circle = {
//   radius: 10,
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   },
// };

// console.log(circle.getArea()); // 314.1592653589793

//

const square = {
  sideLength: 10,
  getArea() {
    return this.sideLength ** 2;
  },

  getPerimeter() {
    return this.sideLength * 4;
  },

  getDoubleSide() {
    for (let i = 0; i < 10; i++) {
      this.sideLength = this.sideLength * 2;
      console.log(this.sideLength);
    }
  },
};

console.log(square.getArea());
console.log(square.getPerimeter());
console.log(square.getDoubleSide());

// const getArea = square.getArea();
const { getArea } = square;

console.log(getArea()); // функция в отрыве от объекта - без this

// bind call
// bind создает новую функцию, в которой в качестве this выступает указный объект

const chessBoard = {
  sideLength: 3,
};

const getAreaOfChessBoard = getArea.bind(chessBoard);
console.log(getAreaOfChessBoard());
chessBoard.sideLength += 2;
console.log(getAreaOfChessBoard);

//

function sayHi() {
  console.log("My name is " + this.name);
}

sayHi();

const vitaliy = { name: "Vitaliy" };
const vitaliySayHi = sayHi.bind(vitaliy); // получили связанную с объектом функцию

vitaliySayHi();
vitaliySayHi();

// APPLY сразу вызывает функцию с указанныи объектом в качестве this

sayHi.apply({ name: "Vitaliy1" }); // My name is Vitaliy1
