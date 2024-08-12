import React, {
  type FC,
} from 'react';

import { ContentLayout } from 'components/_layouts';

import useStyles from './Footer.styles';

const Footer: FC = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footerRoot}>
      <ContentLayout classes={{ content: classes.footerContent }}>
        <p className={classes.footerCopyright}>
          Who is copyright
        </p>
      </ContentLayout>
    </footer>
  );
};

export default Footer;
