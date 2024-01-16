function sleepFor(sleepDuration) {
  const nowObject = new Date();
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

//              'getUp', 3500, walk
const doAction = (name, duration, next) => {
  console.log(`Starting ${name}`);
  setTimeout(() => {
    console.log(`${name} has finished.`);
    if (next) {
      next();
    }
  }, duration);
};

//
// look
//
const look = () => {
  doAction('look', 500, null);
};

//
// getUp
//
const getUp = () => {
  doAction('getUp', 3500, walk);
};

//
// walk
//
const walk = () => {
  doAction('walk', 2500, openTheDoor);
};

//
// openTheDoor
//
const openTheDoor = () => {
  doAction('openTheDoor', 1200, walkThroughTheDoor);
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = () => {
  doAction('walkThroughTheDoor', 1400, stopTheMadness);
};

const intervalReference = setInterval(() => {
  look();
}, 500);

const stopTheMadness = () => {
  clearInterval(intervalReference);
};

getUp();

// sleepFor(6667);

// the event loop cannot start until the main thread is done.
console.log("This is the end of the main thread.");
