import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  footerRoot: {
    paddingBottom: 40,
    zIndex: 1,

    [theme.breakpoints.down('sm')]: {
      paddingBottom: 30,
    },

    [theme.breakpoints.down('xs')]: {
      paddingBottom: 24,
    },

    [theme.breakpoints.down('xxs')]: {
      paddingBottom: 20,
    },
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerCopyright: {
    fontSize: 18,
  },
}));

export default useStyles;
