import {generateId, convertMinutesToHoursAndMinutes} from '../utils.js';


const MOVIE_COUNT = 50;
const REVIEW_COUNT = 5;
const PREVIEW_VIDEO = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
const POSTER = `img/the-grand-budapest-hotel-poster.jpg`;
const BACKGROUND = `img/bg-the-grand-budapest-hotel.jpg`;
const DIRECTOR = `Wes Andreson`;
const VOTES_MAX = 500;
const RATING_MAX = 10;
const RATING_REVIEW_MAX = 5;

const TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
];

const GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`,
];

const PREVIEWS = [
  `img/aviator.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/dardjeeling-limited.jpg`,
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/johnny-english.jpg`,
  `img/macbeth.jpg`,
  `img/midnight-special.jpg`,
  `img/mindhunter.jpg`,
  `img/moonrise-kingdom.jpg`,
  `img/no-country-for-old-men.jpg`,
  `img/orlando.jpg`,
  `img/player-poster.jpg`,
  `img/pulp-fiction.jpg`,
  `img/revenant.jpg`,
  `img/seven-years-in-tibet.jpg`,
  `img/shutter-island.jpg`,
  `img/snatch.jpg`,
  `img/war-of-the-worlds.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
];

const DESCRIPTIONS = [
  `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual
  needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds
  himself the recipient of a priceless painting and the chief suspect in her murder.`,
  `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
];

const STARRING = [
  `Bill Murray`,
  `Edward Norton`,
  `Jude Law`,
  `Willem Dafoe`,
  `Saoirse Ronan`,
  `Tony Revoloru`,
  `Tilda Swinton`,
  `Tom Wilkinson`,
  `Owen Wilkinson`,
  `Adrien Brody`,
  `Ralph Fiennes`,
  `Jeff Goldblum`,
];

const STARRING_SHORT = [
  `Bill Murray`,
  `Edward Norton`,
  `Jude Law`,
  `Willem Dafoe`,
  `and other`,
];

const RATING_TEXT = [
  `Bad`,
  `Normal`,
  `Good`,
  `Very good`,
  `Awesome`,
];

const RuntimeMinutes = {
  MIN: 60,
  MAX: 180
};

const ReleaseYear = {
  MIN: 1960,
  MAX: 2020,
};

const AUTHORS = [
  `Kate Muir`,
  `Matthew Lickona`,
  `Bill Goodykoontz`,
  `Paula Fleri-Soler`,
  `Amanda Greever`,
];

const MESSAGES = [
  `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of
  the director's funniest and most exquisitely designed movies in years.`,
  `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them,
  they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of
  gravitas to the mix, improving the recipe.`,
  `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
  I wish I could take back.`,
  `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there,
  gruesome and/or heartbreaking.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`
];

const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const getRandomInteger = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomFloat = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return lower + Math.random() * (upper - lower);
};

const getRandomElement = (array) => {
  return array[getRandomInteger(array.length - 1)];
};


const generateRandomDate = (start, end) => {
  const randomeDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return `${MONTHS[randomeDate.getMonth()]} ${randomeDate.getDate()}, ${randomeDate.getFullYear()}`;
};

const generateMovie = () => {
  return {
    id: generateId(),
    title: getRandomElement(TITLES),
    genre: getRandomElement(GENRES),
    preview: getRandomElement(PREVIEWS),
    previewVideo: PREVIEW_VIDEO,
    poster: POSTER,
    background: BACKGROUND,
    releaseYear: getRandomInteger(ReleaseYear.MIN, ReleaseYear.MAX),
    description: getRandomElement(DESCRIPTIONS),
    rating: Number(getRandomFloat(RATING_MAX).toFixed(1)),
    ratingText: getRandomElement(RATING_TEXT),
    votes: getRandomInteger(VOTES_MAX),
    director: DIRECTOR,
    starringShort: STARRING_SHORT.join(`, `),
    starring: STARRING.join(`, `),
    runtime: convertMinutesToHoursAndMinutes(getRandomInteger(RuntimeMinutes.MIN, RuntimeMinutes.MAX)),
    myList: Boolean(getRandomInteger()),
  };
};

const generateReview = () => {
  return {
    author: getRandomElement(AUTHORS),
    rating: getRandomInteger(RATING_REVIEW_MAX),
    message: getRandomElement(MESSAGES),
    date: generateRandomDate(new Date(2000, 0, 1), new Date()),
  };
};

export let movies = [];
export let reviews = [];

for (let i = 0; i < MOVIE_COUNT; i++) {
  movies.push(generateMovie());
}

for (let i = 0; i < REVIEW_COUNT; i++) {
  reviews.push(generateReview());
}
