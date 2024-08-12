import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#232323',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
    color: '#f2f2f2',

    [theme.breakpoints.down('sm')]: {
      padding: '20px',
    },

    [theme.breakpoints.down('xs')]: {
      padding: '10px 20px',
    },

    [theme.breakpoints.down('xxs')]: {
      padding: '10px',
    },
  },
}));

export default useStyles;
