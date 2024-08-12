import React, {
  type FC,
} from 'react';

import { ContentLayout } from 'components/_layouts';

import useStyles from './Header.styles';

const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <header className={classes.headerRoot}>
      <ContentLayout>
        <p>
          LOGO
        </p>
      </ContentLayout>
    </header>
  );
};

export default Header;
