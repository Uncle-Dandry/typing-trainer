import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stats: {
    marginTop: '20px',
    fontSize: '20px',
    textAlign: 'left',
  },
  button: {
    height: 'fit-content',
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#ffffff',
    backgroundColor: '#121212',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}));

export default useStyles;
