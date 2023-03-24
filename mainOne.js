// class classes \ constructor
class ClassesOfCourse {
  constructor ({
    name,
    classes = [],
  }) {
    this,name = name;
    this,classes = classes;
  }
}

// class Course \ constructor
class Course {
  constructor ({
    name,
    classes = [],
    isFree = false,
    language = "spanish",
  }) {
    this,name = name;
    this,classes = classes;
    this.isFree = isFree;
    this.language = language;
  }
  
  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName === "bad course") {
      console.error("Web... no");
    } else {
      this._name = newName;
    }
  }
}

// instance of Courses

const progBasicCourse = new Course({
  name: "Basic programming Course",
  classes: [],
  isFree: true,

});
const htmlCssCourse = new Course({
  name: "Basic HTML and CSS course",
  classes: [],
  language: "english",
});
const basicJavascriptCourse = new Course({
  name: "Basic Javascript course",
  classes: [],
});
const animationCourse = new Course({
  name: "Animation course",
  classes: [],
});
const userExperience = new Course({
  name: "User Experience course",
  classes: [],
});
const dataBusinessCourse = new Course({
  name: "Data Business course",
  classes: [],
});
const dataBasesCourse = new Course({
  name: "Data bases course",
  classes: [],
});

// class LearningPath\ constructor
class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

// instance of learning path
const webSchool = new LearningPath({
  name: "Web School",
  courses: [
    progBasicCourse,
    basicJavascriptCourse,
    htmlCssCourse,
  ],
});
const designSchool = new LearningPath({
  name: "Design School",
  courses: [
    progBasicCourse,
    animationCourse,
    userExperience,
  ],
});
const dataSchool = new LearningPath({
  name: "Data Science School",
  courses: [
    progBasicCourse,
    dataBusinessCourse,
    dataBasesCourse,
  ],
});

// class oneApprentice\ constructor
class OneApprentice {
  constructor({
    name,
    email,
    userName,
    twitter = undefined,
    facebook = undefined,
    instagram = undefined,
    approvedCourse = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.userName = userName;
    this.socialMedia = {
      twitter,
      facebook,
      instagram,
    };
    this.approvedCourse = approvedCourse;
    this.learningPaths = learningPaths;
  }
}

class FreeStudent extends OneApprentice {
  constructor(properties) {
    super(properties);
  }  

  approvedCoursesFinish(newCourse) {
    if(newCourse.isFree)  {
      this.approvedCourse.push(newCourse);
    } else {
      console.log(`Sorry ${this.name} not available`);
    }
  }
}

class BasicStudent extends OneApprentice {
  constructor(properties) {
    super(properties);
  }

  approvedCoursesFinish(newCourse) {
    if(newCourse.language !== "english")  {
      this.approvedCourse.push(newCourse);
    } else {
      console.log(`Sorry ${this.name} not available, in english`);
    }
  }
}

class ExpertStudent extends OneApprentice { 
  constructor(properties) {
    super(properties);
  }

  approvedCoursesFinish(newCourse) {
    this.approvedCourse.push(newCourse);
  }
}


// instance of students \ oneApprentice
const oscar = new BasicStudent({
  name: "oscar",
  email: "oscar@gmail.com",
  userName: "oscarTra",
  learningPaths: [
    webSchool,
    dataSchool,
  ],
});

const jef = new FreeStudent-({
  name: "jefferson",
  email: "jef@gmail.com",
  userName: "jeffersonXD",
  learningPaths: [
    webSchool,
    designSchool,
  ],
});
