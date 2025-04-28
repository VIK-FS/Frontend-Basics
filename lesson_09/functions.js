function sum(a, b = 14) {
  return a + b;
}
sum(10, 12);
console.log(sum(2));

//

// function surname(sName){
//         console.log(`Hi, ${sName}! How are you?`);
// }

// surname("Smith")
// console.log(surname("Smith"));

// function greet(lastName = "Dowson") {
//     return `Hi, ${lastName}! How are you?`;
//   }

//   console.log(greet());
//   console.log(greet("Smith"));

function greet(surname) {
  return `Hi, ${surname ? surname : "Dowson"}! How are you?`;
}

console.log(greet());
console.log(greet("Smith"));
