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

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    github: undefined
  },
};

const oscar = deepCopy(studentBase);
Object.seal(oscar);
// check is seal (configurable: false)
Object.isSealed(oscar);

// check is seal (configurable: false, writable: false)
Object.isFrozen(oscar);


// FACTORY PATTERN
function requiredParams(params) {
  throw new Error(params + " is Required");
}

function createStudent({
  name = requiredParams(" name "),
  email = requiredParams(" email "),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  instagram,
  github
} = {}) {
  return {
    name,
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      github
    }
  }
}

// const os = createStudent({
//   name: "oscar",
//   email: "oscar@aguirre.com",
//   age: 25,
//   approvedCourses: ["courseOne"],
//   learningPaths: undefined,
//   socialMedia: {
//     twitter: undefined,
//     instagram: undefined,
//     github: undefined
//   },
// });

function createStudent({
  name = requiredParams(" name "),
  email = requiredParams(" email "),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  instagram,
  github
} = {}) {

  const privateAttributes = {
    "_name": name,
    "_email": email
  };

  const publicAttributes = {
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      github
    },

    //METHODS
    readName() {
      return privateAttributes["_name"];
    },

    changeName(newName) {
      privateAttributes["_name"] = newName;
    },

    readEmail() {
      return privateAttributes["_email"];
    },

    changeEmail(newEmail) {
      privateAttributes["_email"] = newEmail;
    }
  };

  //PROTECTED METHODS
  Object.defineProperty(publicAttributes, "readName", {
    writable: false,
    configurable: false,
  });
  Object.defineProperty(publicAttributes, "changeName", {
    writable: false,
    configurable: false,
  });

  Object.defineProperty(publicAttributes, "readEmail", {
    writable: false,
    configurable: false,
  });
  Object.defineProperty(publicAttributes, "changeEmail", {
    writable: false,
    configurable: false,
  });

  return publicAttributes;

}

// FUNCTION CREATE LEARNING PATHS
function createLearningPath({
  name = requiredParams("name"),
  courses = []
}) {
  const private = {
    "_name": name,
    "_courses": courses
  };

  const public = {

    get name() {
      return private["_name"];
    },

    set name(newName) {
      if (newName.length !== 0) {
        private["_name"] = newName;
      } else {
        console.warn("your name must have at lasted one character");
      }
    },

    get courses() {
      return private["_courses"]
    }

  };
  return public;
  
}

// GETTERS AND SETTERS
function createStudent({
  name = requiredParams(" name "),
  email = requiredParams(" email "),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  instagram,
  github
} = {}) {

  const privateAttributes = {
    "_name": name,
    "_email": email,
    "_learningPaths": learningPaths
  };

  const publicAttributes = {
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      github
    },

    //METHODS
    get name() {
      return privateAttributes["_name"];
    },
    set name(newName) {
      if (newName.length !== 0) {
        privateAttributes["_name"] = newName;
      } else {
        console.warn("your name must have at least one character");
      }
    },

    get email() {
      return privateAttributes["_email"];
    },
    set email(newEmail) {
      if (newEmail.length !== 0) {
        privateAttributes["_email"] = newEmail;
      } else {
        console.warn("your name must have at least one character");
      }
    },

    get learningPaths() {
      return privateAttributes["_learningPaths"];
    },
    set learningPaths(newLP) {
      if (!newEmail.name) {
        console.warn("your LP hasn't the property name");
        return;
      } 
      
      if (!newLP.courses) {
        console.warn("your LP hasn't courses");
        return;
      }
      
      if (!isArray(newLP.courses)) {
        console.warn("Tu LP has no array (*of courses)");
        return;
      }
      
      privateAttributes["_learningPaths"].push(newLP);
    }
  };

  return publicAttributes;

}

const juan = createStudent({email: "juan@juan.com", name: "Juan"})

juan.learningPaths = "New learning path"