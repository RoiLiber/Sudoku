const cors = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://www.cs.utep.edu/cheon/ws/sudoku/';
const ERROR_MSG = 'Sorry, unable to fetch data';
const NO_SCORES = ['Sorry, no score is yet saved', 'Play to set a new score'];

const ROUTES = {
  home: '/home',
  scorePage: '/scores',
};

const blankBoard = [
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
];

const testBlankBoard = [
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '', '', '', ''],
];

const dices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export {
  cors,
  url,
  ROUTES,
  ERROR_MSG,
  NO_SCORES,
  blankBoard,
  dices
}