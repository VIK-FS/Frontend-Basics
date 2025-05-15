// JSON
// Javascript object notation

const user = {
  name: "john",
  age: 18,
};

// основной формат передачи и хранения информации - это JSON

const userAsJSONString = JSON.stringify(user);
console.log(userAsJSONString); //

const userFromJSON = JSON.parse(userAsJSONString)
console.log(userFromJSON);
