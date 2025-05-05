/**
 * /**
 * Создайте объект дуб oak с полем высота height и полем год year и методом расти grow.
 * Пусть изначальная высота дуба будет 140 см, а год будет 2025.
 * При вызове метода grow пусть дуб растет на 30 сантиметров, а год меняется на следующий.

Запустите цикл и покажите, как дуб будет расти на протяжении 20 лет.

Попробуйте соранить метод grow во внешнем от объекта контесте и вызвать его с другими растениями при помощи bind или apply.
 */

const oak = {
  name: "oak",
  height: 140,
  year: 2025,
  // growthHistory: [],
  //   growthHistory: {},
  grow(qtyYears) {
    for (let i = 0; i < qtyYears; i++) {
      this.year++;
      this.height += 30;

      //   this.growthHistory.push({ year: this.year, height: this.height });
      //   this.growthHistory[this.year] = this.height;

      console.log(
        `In the year ${this.year}, the ${this.name} will be ${this.height} cm tall.`
      );
    }
  },
};

const { grow } = oak;

const spruce = {
  name: "spruce",
  height: 100,
  year: 2025,
};

const growSpruce = grow.bind(spruce);
growSpruce(20);

console.log();

const pine = {
  name: "pine",
  height: 80,
  year: 2025,
};

const growPine = grow.bind(pine);
growPine(20);

console.log();

oak.grow(20);

// console.log("\nGrowth history:", oak.growthHistory);
