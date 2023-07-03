const objOne = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },

  //Method
  editA() {
    this.a = "abcd";
  }
}

// const objTwo = {};
// for (const prop in objOne) {
//   objTwo[prop] = objOne[prop];
// }
// console.log(objTwo);

// const objThree = Object.assign({}, objOne);
// const objFour = Object.create(objOne);


const stringifyComplexObj = JSON.stringify(objOne);
// don't works with Methods
const objTwo = JSON.parse(stringifyComplexObj);

