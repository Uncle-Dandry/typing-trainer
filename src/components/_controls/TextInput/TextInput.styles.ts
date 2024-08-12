import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  container: {
    position: 'relative',
    maxWidth: 1000,
    width: '100%',
    margin: '40px auto',
    padding: '15px',
    backgroundColor: '#232323',

    [theme.breakpoints.down('sm')]: {
      padding: '10px 0',
    },
  },
  text: {
    fontSize: '24px',
    lineHeight: '1.5em',
    letterSpacing: '0.2em',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    color: '#f9f9f9',

    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },

    [theme.breakpoints.down('xxs')]: {
      fontSize: '18px',
    },
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    fontSize: '24px',
    lineHeight: '1.5em',
    letterSpacing: '0.2em',
    whiteSpace: 'pre-wrap',
    color: 'transparent',
    caretColor: 'transparent',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    resize: 'none',
    overflow: 'hidden',
    zIndex: 1,

    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },

    [theme.breakpoints.down('xxs')]: {
      fontSize: '18px',
    },
  },
  invalidSpace: {
    marginBottom: -2,
    borderBottom: '2px solid #f98999',
  },
  success: {
    color: '#A5D6A7',
  },
  mistake: {
    color: '#f98999',
  },
  char: {
    position: 'relative',
    display: 'inline-block',

    '@keyframes caretBlink': {
      '0%': { opacity: 1 },
      '50%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    '& > .caret': {
      position: 'absolute',
      top: '50%',
      width: '1px',
      height: '1.2em',
      display: 'inline-block',
      backgroundColor: '#A5D6A7',
      transform: 'translate(-2px, -50%)',
      animation: 'caretBlink 1s step-end infinite',
      zIndex: 2,
    },
  },
}));

export default useStyles;
