import React, {
  type FC,
  memo,
} from 'react';

import useStyles from './Results.styles';

const Results: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.results}>
      <h2>
        Finished!
      </h2>
    </div>
  );
};

export default memo(Results);
