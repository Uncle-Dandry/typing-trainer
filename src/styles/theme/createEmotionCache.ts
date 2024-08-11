import createCache, { type EmotionCache } from '@emotion/cache';

const createEmotionCache = (): EmotionCache => {
  return createCache({
    key: 'mui',
    prepend: true,
  });
};

export default createEmotionCache;
