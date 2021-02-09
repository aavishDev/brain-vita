import { useContext } from 'react';
import { AppContext } from 'context';
import { withStyles } from '@material-ui/core';

import styles from './HeaderStyles';

const Header = (props) => {
  const { marblesLeft, gameOver, gameWon } = useContext(AppContext);
  const { classes } = props;
  return (
    <header className={classes.headerStyles}>
      <div style={{ marginRight: '6em' }}></div>
      <div>PLAY 🧠&nbsp;VITA</div>
      <div>⚫ { gameOver || gameWon ? 'your score' : 'remaining'}: {marblesLeft}</div>
    </header>
  );
}

export default withStyles(styles)(Header);