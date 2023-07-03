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

//Recursive
// const numbers = [1,2,3,4,5,6,7,8,9,8];

// function recursive(numbersArray) {
//   if (numbersArray.length !== 0) {
//     const first = numbersArray[0];
//     console.log(first);
//     numbersArray.shift();

//     return recursive(numbersArray);

//   } else {

//   }
// }

function isArray(subject) {
  return Array.isArray(subject);
}
function isObject(subject) {
  return typeof subject == "object";
}

function deepCopy(subject) {
  let copySubject;

  let subjectIsArray = isArray(subject);
  let subjectIsObject = isObject(subject);
  
  if (subjectIsArray) {
    copySubject = [];

  } else if (subjectIsObject) {
    copySubject = {};
  
  } else {
    return subject;
  }

  for (const key of subject) {
    const keyIsObject = isObject(subject[key]);
    
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);

    }else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key]
      }
    }
  }
   
  return subject;
}
