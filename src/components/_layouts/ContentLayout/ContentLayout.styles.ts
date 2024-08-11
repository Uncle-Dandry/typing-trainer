import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    padding: '0 70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',

    [theme.breakpoints.down('xl')]: {
      padding: '0 40px',
    },

    [theme.breakpoints.down('xs')]: {
      padding: '0 16px',
    },
  },
  contentWrapper: {
    width: '100%',
    maxWidth: 1240,
  },
}));

export default useStyles;
