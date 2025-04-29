/**Задание 2
Создайте метод который принимает массив строк, ничего!! не возвращает.
Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.

["apple", "orange"] ---> ["Apple", "orange"] */

function upperCaseFirstElement(array) {
  if (!array.length) return;
  const firstWort = array[0];
  array[0] = firstWort.charAt(0).toUpperCase() + firstWort.slice(1);
  console.log("Output array: ", array);
}

const sourceArray = ["apple", "orange"];
console.log("SourceArray : ", sourceArray);

upperCaseFirstElement(sourceArray);
