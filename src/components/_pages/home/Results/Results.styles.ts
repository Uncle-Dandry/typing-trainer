import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  results: {
    marginTop: '20px',
    textAlign: 'center',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#ffffff',
    backgroundColor: '#121212',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}));

export default useStyles;
