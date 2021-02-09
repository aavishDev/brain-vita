import React, { createContext, useState } from "react";

import Constants from 'Constants';
import { getCurrentMarblesCount, anyValidMovesLeft } from 'utils';

export const AppContext = createContext({
  board: null,
});

export const AppProvider = ({ children }) => {
  const [pieces, setPieces] = useState(Constants.getInitBoardState());
  const updateBoard = (board) => {
    setPieces([...board]);
  };
  const value = {
    pieces,
    updateBoard,
    marblesLeft: getCurrentMarblesCount(pieces),
    gameOver: !anyValidMovesLeft(pieces),
    gameWon: getCurrentMarblesCount(pieces) === 1,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
