import { create } from 'zustand';

import type { StoreState } from './types';

import { createTypingInfoSlice } from './slices';

const useBoundStore = create<StoreState>()((...a) => ({
  ...createTypingInfoSlice(...a),
}));

export const useTypedInfoStore = useBoundStore((store) => store.typingInfo);

export default useBoundStore;
