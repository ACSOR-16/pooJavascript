class LearningPath {
  constructor({
    
  }) {

  }
}

const webSchool = new LearningPath();
const designSchool = new LearningPath();
const dataSchool = new LearningPath();

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
})
