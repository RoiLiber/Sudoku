const cors = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://www.cs.utep.edu/cheon/ws/sudoku/';
const ERROR_MSG = 'Sorry, unable to fetch data';

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

const dices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export {
  cors,
  url,
  ROUTES,
  ERROR_MSG,
  blankBoard,
  dices
}
