import React, {
  type FC,
  type ReactNode,
  memo,
} from 'react';

import useStyles from './ContentLayout.styles';

interface ContentLayoutClassesProps {
  root?: string;
  content?: string;
}

interface ContentLayoutProps {
  classes?: ContentLayoutClassesProps;
  id?: string;
  component?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

const ContentLayout: FC<ContentLayoutProps> = ({
  classes: {
    root = '',
    content = '',
  } = {},
  id,
  component: Component = 'div',
  children,
}) => {
  const { classes, cx } = useStyles();

  return (
    <Component
      className={cx(classes.root, root)}
      id={id}
    >
      <div className={cx(classes.contentWrapper, content)}>
        {children}
      </div>
    </Component>
  );
};

export default memo(ContentLayout);
