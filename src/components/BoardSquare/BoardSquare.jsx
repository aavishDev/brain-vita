import React from 'react';
import { useDrop } from 'react-dnd';
import { withStyles } from '@material-ui/core';

import Square from 'components/Square';
import Constants from 'Constants';
import { showAvailablePositions } from 'utils';
import Highlight from 'components/Highlight';

import styles from './BoardSquareStyles';

const BoardSquare = (props) => {
  const { classes, x, y, squareNum } = props;
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: Constants.ItemTypes.MARBLE,
    drop: (item, monitor) => {
      return { endX: x, endY: y };
    },
    canDrop: (item) => showAvailablePositions(item.startX, item.startY, x, y, item.matrix),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div className={classes.boardSquare} ref={drop}>
      <Square key={props.key} squareNum={squareNum}>{props.children}</Square>
      <Highlight canDrop={canDrop} isOver={isOver} />
    </div>
  );
};

export default withStyles(styles)(BoardSquare);
