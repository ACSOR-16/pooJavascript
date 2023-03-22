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
  }) {
    this,name = name;
    this,classes = classes;
  }
}

// instance of Courses

const progBasicCourse = new Course({
  name: "Basic programming Course",
  classes: [],
});
const htmlCssCourse = new Course({
  name: "Basic HTML and CSS course",
  classes: [],
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

// instance of students \ oneApprentice
const oscar = new OneApprentice({
  name: "oscar",
  email: "oscar@gmail.com",
  userName: "oscarTra",
  learningPaths: [
    webSchool,
    dataSchool,
  ],
});

const jef = new OneApprentice({
  name: "jefferson",
  email: "jef@gmail.com",
  userName: "jeffersonXD",
  learningPaths: [
    webSchool,
    designSchool,
  ],
});
