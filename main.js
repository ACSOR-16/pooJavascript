// OBJECT LITERAL
const person = {
  name: "Oscar",
  age: 25,
  approvedCourses: [
    "course HTML and CSS",
    "course Javascript",
  ],
  passCourse(course) {
    this.approvedCourses.push(course);
  }
}

// person.approvedCourses.push("Python course");

// PROTOTYPE // CONSTRUCTOR
function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;
  // this.passCourse = function (course) {
    // this.approvedCourses.push(course);
  // }

}

// Creation of a Method 
Student.prototype.passCourse = function (course) {
  this.approvedCourses.push(course);
}

//Creation of a instance
const pablo = new Student(
  "Pablo Contreras",
  23,
  [
    "course python",
    "create of players"
  ],
);

//prototypes with  class syntax
class StudentOne {
  constructor({
    age, 
    approvedCourses = [],
    email,
    name, 
  }) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.email = email;
  }

  passCourse(course) {
    this.approvedCourses.push(course);
  }
}

const miguel = new StudentOne( {
  name: "miguel",
  age: 23,
  email: "miguel@mail.com",
} )