/**
 * Создайте объект дуб oak с полем высота height и полем год year и методом расти grow.
 * Пусть изначальная высота дуба будет 140 см, а год будет 2025.
 * При вызове метода grow пусть дуб растет на 30 сантиметров, а год меняется на следующий.

Запустите цикл и покажите, как дуб будет расти на протяжении 20 лет.
 */

const oak = {
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
        `In the year ${this.year}, the oak will be ${this.height} cm tall.`
      );
    }
  },
};

oak.grow(20);

// console.log("\nGrowth history:", oak.growthHistory);
