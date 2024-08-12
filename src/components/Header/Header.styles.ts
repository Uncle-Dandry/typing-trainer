import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  headerRoot: {
    padding: '30px 0 0',
    zIndex: 1000,

    [theme.breakpoints.down('sm')]: {
      padding: '20px 0 0',
    },
  },
  headerContent: {
    marginBottom: 32,
    display: 'grid',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  headerLogotypeLink: {
    height: 'fit-content',
    alignSelf: 'center',
  },
}));

export default useStyles;
