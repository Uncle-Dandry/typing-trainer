import React, {
  type FC,
  type ChangeEvent,
  useState,
  memo,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { useTypingInfoStore } from 'store';

import { calculateWPM } from 'utils';

import useStyles from './TextInput.styles';

// TODO: mb replace with api in the future
// const text = 'The quick brown fox jumps over the lazy dog. This sentence is often used to test typing skills because it contains every letter of the alphabet at least once. Typing practice helps improve speed and accuracy over time. To become proficient at typing, it\'s important to focus on maintaining a steady rhythm and minimizing errors. Consistent practice is key to developing muscle memory and increasing typing efficiency. Remember to keep your hands relaxed and use the correct finger placement on the keyboard. With time, you’ll find yourself typing faster and more accurately without even thinking about it.';
const text = 'The quick brown fox jumps over the lazy dog.';

const TextInput: FC = () => {
  const { classes } = useStyles();

  const {
    mistakeCounter,
    userInput,
    update: updateTypingInfo,
  } = useTypingInfoStore();

  const timeoutRef = useRef<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(
    () => {
      if (userInput && startTime) {
        const startTimeOffset = startTime + 1000;

        const updateWPM = () => {
          if (startTime) {
            const wpm = calculateWPM(userInput.length, startTime);
            updateTypingInfo({ wpmCounter: wpm });
          }

          timeoutRef.current = window.setTimeout(updateWPM, 1000);
        };

        if (Date.now() >= startTimeOffset) {
          updateWPM();
        } else {
          timeoutRef.current = window.setTimeout(
            () => {
              updateWPM();
            },
            startTimeOffset - Date.now()
          );
        }
      }

      return () => {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }
      };
    },
    [
      startTime,
      userInput,
      updateTypingInfo,
    ],
  );

  useEffect(
    () => {
      const handleKeyDown = () => {
        if (textareaRef.current !== null) {
          textareaRef.current.focus();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    },
    [],
  );

  const currentIndex = userInput.length;

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const newUserInput = e.target.value;
      const isFinished = newUserInput.length === text.length;

      if (!startTime) {
        setStartTime(Date.now());
      }

      let newMistakeCounter = mistakeCounter;

      // Determine if user is adding or deleting text
      if (newUserInput.length > userInput.length) {
        if (newUserInput[currentIndex] !== text[currentIndex]) {
          newMistakeCounter++;
        }
      } else {
        const deletedIndex = Math.min(newUserInput.length, userInput.length - 1);
        const deletedChar = userInput[deletedIndex];

        if (deletedChar !== text[deletedIndex]) {
          newMistakeCounter--;
        }
      }

      updateTypingInfo({
        isFinished,
        mistakeCounter: newMistakeCounter,
        userInput: isFinished ? '' : newUserInput,
      });
    },
    [
      currentIndex,
      mistakeCounter,
      userInput,
      startTime,
      setStartTime,
      updateTypingInfo,
    ],
  );

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        {text.split('').map((char, index) => {
          const userChar = userInput[index] || '';

          let charClass = '';

          if (userChar === char) {
            charClass = classes.success;
          } else if (userChar !== '' && char !== ' ') {
            charClass = classes.mistake;
          } else if (userChar !== '' && char === ' ') {
            charClass = classes.invalidSpace;
          }

          return (
            <span
              key={index}
              className={`${
                classes.char
              } ${
                charClass
              }`}
            >
              {index === currentIndex && (
                <span className='caret' />
              )}
              {char}
            </span>
          );
        })}
      </div>

      <textarea
        className={classes.input}
        ref={textareaRef}
        autoFocus
        spellCheck={false}
        aria-label="Type here"
        value={userInput}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default memo(TextInput);
