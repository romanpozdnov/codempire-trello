import React, { useState } from "react";

export const useStatusFilter = (allStatuses = [], initialStatus) => {
  const ordered = allStatuses.sort((a, b) => a.order - b.order);

  const [currentIndex, setCurrentIndex] = useState(() => {
    return ordered.findIndex(({ status }) => status === initialStatus);
  });

  const getPrev = () => {
    const isStart = currentIndex === 0;
    const index = isStart ? ordered.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const getNext = () => {
    const isEnd = currentIndex === ordered.length - 1;
    const index = isEnd ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return [ordered[currentIndex], getPrev, getNext];
};