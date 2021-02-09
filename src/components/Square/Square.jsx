import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './SquareStyles';

const Square = (props) => {
  const { classes, children, squareNum } = props;
  const style = {
    backgroundColor: '#ccc',
    border: '.3px solid',
    ...(squareNum < 0 && { opacity: '0' })
  };

  return (
    <div className={classes.square} style={style}>
      {children}
    </div>
  );
};

export default withStyles(styles)(Square);
