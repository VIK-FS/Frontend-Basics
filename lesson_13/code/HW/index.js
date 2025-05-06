function swapKeyValues(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    newObj[values[i]] = keys[i];
  }

  // console.log(keys, values);
}

swapKeyValues({ name: "Bob", job: "pluber" });

////////

const oak = {
  height: 140,
  year: 2025,
  grow() {
    this.height += 30;
    this.year++;
  },
};

for (let i = 0; i <= 20; i++) {
  oak.grow();
  console.log(oak);
}

// 3

//

// const { grow } = oak;

// function grow() {
//   this.year++;
//   this.height += 30;
// }

const grow = () => {
  this.year++;
  this.height += 30;
};


const sycamore = {
  height: 300,
  year: 2001,
};

// apply
grow.apply(sycamore);
console.log(sycamore);

// bind
const growSycamore = grow.bind(sycamore);
console.log(sycamore);
