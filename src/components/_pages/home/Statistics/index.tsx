import React, {
  type FC,
  memo,
} from 'react';

import { useTypingInfoStore } from 'store';

import useStyles from './Statistics.styles';

const Statistics: FC = () => {
  const { classes } = useStyles();

  const {
    wpmCounter,
    mistakeCounter,
    reset,
  } = useTypingInfoStore();

  return (
    <div className={classes.root}>
      <div className={classes.stats}>
        <p>
          Speed: {wpmCounter} WPM
        </p>

        <p>
          Mistakes: {mistakeCounter}
        </p>
      </div>

      <button
        className={classes.button}
        onClick={reset}
      >
        Restart
      </button>
    </div>
  );
};

export default memo(Statistics);
