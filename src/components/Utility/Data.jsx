import hot97 from "../FartSounds/hot-97.mp3";
import fullThrottle from "../FartSounds/full-throttle.mp3";
import loudFarts from "../FartSounds/loud-farts.mp3";
import yoCheckYourPants from "../FartSounds/yo-check-pants.mp3";
import bombDrop from "../FartSounds/bomb-drop.mp3";

let fartTimeout = '';

export const fartSounds = [
  {
    key: 1,
    name: "Hot #2",
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
    name: "10 sec",
  },
  {
    key: 2,
    name: "15 sec",
  },
  {
    key: 3,
    name: "30 sec",
  },
  {
    key: 4,
    name: "45 sec",
  },
  {
    key: 5,
    name: "1 min",
  },
];

export const makeFartNow = (name) => {
  // eslint-disable-next-line default-case
  switch (name) {
    case "Hot #2":
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
    case "10 sec":
      return 10000;
    case "15 sec":
      return 15000;
    case "30 sec":
      return 30000;
    case "45 sec":
      return 45000;
    case "1 min":
      return 59000;
    default:
      return 0;
  }
};

export const cancelFart = () => clearTimeout(fartTimeout);

export const convertMillisToMinutesAndSeconds = (time) => {
  const millis = getTimer(time);
  // var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000);
  return seconds;
}
