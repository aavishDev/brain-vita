import { useState, useContext } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import styles from './ResultStyles';
import { AppContext } from 'context';
import Constants from 'Constants';

const Result = (props) => {
  const { updateBoard, marblesLeft } = useContext(AppContext);
  const [ name, setName ] = useState('');
  const [ error, setError ] = useState(false);
  const { classes, gameOver, gameWon } = props;

  const handleSubmit = e => {
    e.preventDefault();
    window.alert(`Submitted Data: Name - ${name}, Score - ${marblesLeft}`);
    updateBoard(Constants.getInitBoardState());
  }

  const handleChange = e => {
    e.target.value === '' ? setError(true) : setError(false);
    setName(e.target.value);
  }

  return (
    <div className={classes.resultStyles}>
      { gameOver && !gameWon && <h2 className={classes.result}> Game over 😬 no moves left</h2> }
      { gameWon && <h2 className={classes.result}> Congratulations 🎉🎉 you've won</h2> }

      <form className={classes.formStyles} onSubmit={handleSubmit} autoComplete='off'>
        <TextField
          id="outlined-full-width"
          label="Enter name to play again"
          placeholder="Your Name"
          fullWidth
          margin="normal"
          variant="outlined"
          error={error}
          onChange={handleChange}
          value={name}
          helperText={error ? 'Name is needed to submit score': 'Hit enter to submit'}
          InputProps={{ classes: { root: classes.inputRoot } }}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
              focused: classes.labelFocused
            }
          }}
        />
      </form>
    </div>
  )
}

export default withStyles(styles)(Result);
