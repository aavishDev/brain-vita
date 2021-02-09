const Constants = {};

Constants.ItemTypes = {
  MARBLE: 'marble',
};

/*
  Board States
  -1 : Unavailable slot
  0 : Available slot
  2 : Occupied slot
*/

Constants.getInitBoardState = () => [
  [-1, -1, 2, 2, 2, -1, -1],
  [-1, -1, 2, 2, 2, -1, -1],
  [2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 0, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2],
  [-1, -1, 2, 2, 2, -1, -1],
  [-1, -1, 2, 2, 2, -1, -1],
];

Constants.MARBLE_STRING = '⚫';

export default Constants;
