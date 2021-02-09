import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './HighlightStyles';

const Highlight = (props) => {
  const { classes, isOver, canDrop } = props;
  let classCol = [classes.highlight];

  if (!isOver && !canDrop) {
    return false;
  }

  if (isOver) {
    if (canDrop) {
      classCol.push(classes.validMove);
    } else {
      classCol.push(classes.invalidMove);
    }
  } else if (canDrop) {
    classCol.push(classes.suggest);
  }

  return <div className={classCol.join(' ')} />;
};

export default withStyles(styles)(Highlight);
