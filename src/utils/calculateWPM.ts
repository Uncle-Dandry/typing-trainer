const calculateWPM = (charCount: number, startTime: number): number => {
  const elapsedMinutes = (Date.now() - startTime) / 60000; // 60s

  return Math.round((charCount / 5) / elapsedMinutes);
};

export default calculateWPM;
