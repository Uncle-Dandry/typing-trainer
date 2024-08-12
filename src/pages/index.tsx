import React, {
  type FC,
} from 'react';

import { useTypingInfoStore } from 'store';

import { ContentLayout } from 'components/_layouts';
import { TextInput } from 'components/_controls';
import {
  Results,
  Statistics,
} from 'components/_pages/home';

import useStyles from 'styles/_pages/Home.styles';

const HomePage: FC = () => {
  const { classes } = useStyles();

  const { isFinished } = useTypingInfoStore();

  return (
    <ContentLayout
      classes={{
        root: classes.root,
        content: classes.container,
      }}
    >
      <h1>
        Typing Speed Trainer
      </h1>

      <Statistics />

      {isFinished ? (
        <Results />
      ) : (
        <TextInput />
      )}
    </ContentLayout>
  );
};

export default HomePage;
