// creation of functions 
function playVideo(id) {
  const secretUrl = "http://www.osar.com/home/videos";
  console.log(`playing video ${secretUrl}`);
}

function pauseVideo(id) {
  const secretUrl = "http://www.osar.com/home/videos";
  console.log(`pausing video ${secretUrl}`);
}

// OBJECT / class
export class OscarClass {
  constructor({
    name,
    videoID,
  }){
    this.name = name;
    this.videoID = videoID;
  }
  // creation of methods
  play() {
    playVideo(this.videoID);
  }

  pause() {
    pauseVideo(this.videoID);
  }
}