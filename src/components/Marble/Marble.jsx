import React from 'react';
import { useDrag } from 'react-dnd';
import { withStyles } from '@material-ui/core';

import Constants from 'Constants';

import styles from './MarbleStyles';

const Marble = (props) => {
  const { classes } = props;
  const [{ isDragging }, drag] = useDrag({
    item: {
      id: props.id,
      startX: props.x,
      startY: props.y,
      matrix: props.matrix,
      updateBoard: props.updateBoard,
      type: Constants.ItemTypes.MARBLE
    },
    end: (itemObj, monitor) => {

      if (!monitor.didDrop()) return;

      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      const diffX = dropResult.endX - item.startX;
      const diffY = dropResult.endY - item.startY;

      if (diffX === 2) {
        item.matrix[dropResult.endX - 1][dropResult.endY] = 0;
      } else if (diffX === -2) {
        item.matrix[dropResult.endX + 1][dropResult.endY] = 0;
      } else if (diffY === 2) {
        item.matrix[dropResult.endX][dropResult.endY-1] = 0;
      } else if (diffY === -2) {
        item.matrix[dropResult.endX][dropResult.endY+1] = 0;
      }

      item.matrix[item.startX][item.startY] = 0;
      item.matrix[dropResult.endX][dropResult.endY] = 2;
      item.updateBoard(item.matrix);
    }
  });

  return (
    <span ref={drag} className={classes.piece} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {Constants.MARBLE_STRING}
    </span>
  );
};



export default withStyles(styles)(Marble);
