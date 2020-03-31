import { useState } from 'react';

interface IStatusFilterState {
  currentIndex: any;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

export const useStatusFilter = (allStatuses: [], initialStatus: string) => {
  const ordered = allStatuses.sort((a, b) => a.order - b.order);

  const findStartIndex = () =>
    ordered.findIndex(({ status }) => status === initialStatus);
  const startIndex = findStartIndex();

  const initialValues = {
    currentIndex: startIndex,
    isPrevDisabled: false,
    isNextDisabled: false,
  };

  const [state, setState] = useState<IStatusFilterState>(initialValues);

  const getPrev = () => {
    const index = state.currentIndex - 1;
    setState((prevState: IStatusFilterState) => ({
      ...prevState,
      currentIndex: index,
    }));
    setDisabled(index);
  };

  const getNext = () => {
    const index = state.currentIndex + 1;
    setState((prevState: IStatusFilterState) => ({
      ...prevState,
      currentIndex: index,
    }));
    setDisabled(index);
  };

  const setDisabled = (index: number) => {
    setState((prevState: IStatusFilterState) => ({
      ...prevState,
      isPrevDisabled: index === 0,
      isNextDisabled: index === ordered.length - 1,
    }));
  };

  return [
    ordered[state.currentIndex],
    getPrev,
    getNext,
    { isPrevDisabled: state.isPrevDisabled },
    { isNextDisabled: state.isNextDisabled },
  ];
};
