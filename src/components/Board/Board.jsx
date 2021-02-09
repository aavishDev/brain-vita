import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core';

import { AppContext } from 'context';
import BoardSquare from 'components/BoardSquare';
import Marble from 'components/Marble';

import styles from './BoardStyles';
import Result from 'components/Result';
import Header from 'components/Header';

const Board = (props) => {
  const { classes } = props;
  const { pieces, updateBoard, gameOver, gameWon } = useContext(AppContext);

  let squares = [];
  for (let x = 0; x < pieces.length; x++) {
    for (let y = 0; y < pieces.length; y++) {
      const squareNum = pieces[x][y];
      squares.push(
        <BoardSquare
          key={`board-square-${x}${y}`}
          x={x}
          y={y}
          squareNum={squareNum}
        >
          {squareNum === 2 && (
            <Marble
              id={`marble-${x}${y}`}
              x={x}
              y={y}
              matrix={pieces}
              updateBoard={updateBoard}
            />
          )}
        </BoardSquare>
      );
    }
  }

  return (
    <>
      <Header />
      {gameOver || gameWon ? (
        <Result gameOver={gameOver} gameWon={gameWon} />
        ) : (
        <>
          <div className={classes.board}>{squares}</div>
        </>
      )}
    </>
  );
};

export default withStyles(styles)(Board);
