import React, { useState } from 'react';

// TODO: single useState
export const useStatusFilter = (allStatuses = [], initialStatus) => {
  const ordered = allStatuses.sort((a, b) => a.order - b.order);

  const [currentIndex, setCurrentIndex] = useState(() => {
    return ordered.findIndex(({ status }) => status === initialStatus);
  });

  const [isPrevDisabled, setPrevDisabled] = useState(false);
  const [isNextDisabled, setNextDisabled] = useState(false);

  const getPrev = () => {
    const index = currentIndex - 1;
    setCurrentIndex(index);
    setDisabled(index);
  };

  const getNext = () => {
    const index = currentIndex + 1;
    setCurrentIndex(index);
    setDisabled(index);
  };

  const setDisabled = index => {
    setPrevDisabled(index === 0);
    setNextDisabled(index === ordered.length - 1);
  };

  return [
    ordered[currentIndex],
    getPrev,
    getNext,
    isPrevDisabled,
    isNextDisabled,
  ];
};
