import { type StateCreator } from 'zustand';
import 'zustand/middleware';

import type { StoreState } from '../types';

interface TypingInfoState {
  isFinished: boolean;
  mistakeCounter: number;
  wpmCounter: number;
  userInput: string;
}

interface TypingInfoActions {
  update: (newTypingInfo: Partial<TypingInfoState>) => void;
  reset: () => void;
}

export interface TypingInfoSlice {
  typingInfo: TypingInfoState & TypingInfoActions;
}

const initialTypingInfo: TypingInfoState = {
  isFinished: false,
  mistakeCounter: 0,
  wpmCounter: 0,
  userInput: '',
};

const createTypingInfoSlice: StateCreator<
  StoreState,
  [["zustand/devtools", never]],
  [],
  TypingInfoSlice
> = (set) => ({
  typingInfo: {
    ...initialTypingInfo,
    update: (payload: Partial<TypingInfoState>) => set(
      (state) => ({
        ...state,
        typingInfo: {
          ...state.typingInfo,
          ...payload,
        },
      }),
    ),
    reset: () => {
      set(
        (state) => ({
          ...state,
          typingInfo: {
            ...state.typingInfo,
            ...initialTypingInfo,
          },
        }),
      );
    },
  },
});

export default createTypingInfoSlice;
