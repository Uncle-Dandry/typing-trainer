import { type StateCreator } from 'zustand';

import type { StoreState } from '../types';

interface TypingInfoState {
  errorCounter: number;
  wpmCounter: number;
}

interface TypingInfoActions {
  update: (newTypingInfo: TypingInfoState) => void;
  reset: () => void;
}

export interface TypingInfoSlice {
  typingInfo: TypingInfoState & TypingInfoActions;
}

const initialTypingInfo: TypingInfoState = {
  errorCounter: 0,
  wpmCounter: 0,
};

const createTypingInfoSlice: StateCreator<
  StoreState,
  [],
  [],
  TypingInfoSlice
> = (set) => ({
  typingInfo: {
    ...initialTypingInfo,
    update: (payload: TypingInfoState) => set(
      (state) => ({
        ...state,
        typingInfo: {
          ...state.typingInfo,
          payload,
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
