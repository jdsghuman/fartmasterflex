import hot97 from "../FartSounds/hot-97.mp3";
import fullThrottle from "../FartSounds/full-throttle.mp3";
import loudFarts from "../FartSounds/loud-farts.mp3";
import yoCheckYourPants from "../FartSounds/yo-check-pants.mp3";
import bombDrop from "../FartSounds/bomb-drop.mp3";

let fartTimeout = '';

export const fartSounds = [
  {
    key: 1,
    name: "Hot 97",
    media: new Audio(hot97),
  },
  {
    key: 2,
    name: "Full Throttle",
    media: new Audio(fullThrottle),
  },
  {
    key: 3,
    name: "Loud Farts",
    media: new Audio(loudFarts),
  },
  {
    key: 4,
    name: "Yo! Check yo pants",
    media: new Audio(yoCheckYourPants),
  },
  {
    key: 5,
    name: "Bomb Drop",
    media: new Audio(bombDrop),
  },
];

export const fartTimer = [
  {
    key: 1,
    name: "15sec",
  },
  {
    key: 2,
    name: "30sec",
  },
  {
    key: 3,
    name: "1min",
  },
  {
    key: 4,
    name: "1min 30secs",
  },
  {
    key: 5,
    name: "2mins",
  },
];

export const makeFartNow = (name) => {
  // eslint-disable-next-line default-case
  switch (name) {
    case "Hot 97":
      return fartSounds[0].media.play();
    case "Full Throttle":
      return fartSounds[1].media.play();
    case "Loud Farts":
      return fartSounds[2].media.play();
    case "Yo! Check yo pants":
      return fartSounds[3].media.play();
    case "Bomb Drop":
      return fartSounds[4].media.play();
  }
};

export const makeFart = (name, timer) => {
  fartTimeout = setTimeout(() => {
    makeFartNow(name);
  }, getTimer(timer));
};

export const getTimer = (timer) => {
  switch (timer) {
    case "15sec":
      return 2000;
    case "30sec":
      return 30000;
    case "1min":
      return 60000;
    case "1min 30secs":
      return 90000;
    case "2mins":
      return 120000;
    default:
      return 0;
  }
};

export const cancelFart = () => clearTimeout(fartTimeout);
