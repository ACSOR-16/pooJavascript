console.log("Hello world");

const oscar = {
  name: "oscar",
  age: 18,
  approvedCourses: ["course 1"],
  
  // methods
  addCourse(nweCourse){
    this.approvedCourses.push(nweCourse)
  }
};

// console.log(Object.keys(oscar));
// console.log(Object.getOwnPropertyNames(oscar));
// console.log(Object.entries(oscar));


Object.defineProperty(oscar, "testNasa", {
  value: "Control missions",
  configurable: true,
  enumerable: true,
  writable: true,
});

Object.defineProperty(oscar, "Browser", {
  value: "Brave",
  configurable: true,
  enumerable: false,
  writable: true,
});

Object.defineProperty(oscar, "Terminal", {
  value: "Bash",
  configurable: false,
  enumerable: true,
  writable: true,
});

Object.defineProperty(oscar, "Editor", {
  value: "VS Code",
  configurable: true,
  enumerable: true,
  writable: false,
});

//configurable: false, writable: false
Object.freeze(oscar);

// configurable: false
Object.seal(oscar);

console.log(Object.getOwnPropertyDescriptors(oscar));