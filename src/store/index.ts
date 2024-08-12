import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { StoreState } from './types';

import { createTypingInfoSlice } from './slices';

const useBoundStore = create<StoreState>()(
  devtools(
    (...args) => ({
      ...createTypingInfoSlice(...args),
    }),
    { serialize: true },
  ),
);

export const useTypingInfoStore = () => useBoundStore((store) => store.typingInfo);

export default useBoundStore;
