import React, { useState, useEffect } from "react";

import { getAllTasks } from "./board.api";
import { ITask } from "src/constants/types";

interface IBoard {
  tasks?: [];
  currentIndex: any;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

export const useBoard = (allStatuses: [], initialStatus: string) => {
  const ordered = allStatuses.sort((a, b) => a.order - b.order);

  const findStartIndex = () =>
    ordered.findIndex(({ status }) => status === initialStatus);
  const startIndex = findStartIndex();

  const initialValues = {
    tasks: [],
    currentIndex: startIndex,
    isPrevDisabled: false,
    isNextDisabled: false,
  };

  const [state, setState] = useState<IBoard>(initialValues);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const result = await getAllTasks();
      setState((prevState: IBoard) => ({ ...prevState, tasks: result.data }));
    } catch (error) {
      console.log(error);
    }
  };

  const getPrev = () => {
    const index = state.currentIndex - 1;
    setState((prevState: IBoard) => ({
      ...prevState,
      currentIndex: index,
    }));
    setDisabled(index);
  };

  const getNext = () => {
    const index = state.currentIndex + 1;
    setState((prevState: IBoard) => ({
      ...prevState,
      currentIndex: index,
    }));
    setDisabled(index);
  };

  const setDisabled = (index: number) => {
    setState((prevState: IBoard) => ({
      ...prevState,
      isPrevDisabled: index === 0,
      isNextDisabled: index === ordered.length - 1,
    }));
  };

  return [
    getTasks,
    state.tasks,
    ordered[state.currentIndex],
    getPrev,
    getNext,
    { isPrevDisabled: state.isPrevDisabled },
    { isNextDisabled: state.isNextDisabled },
  ];
};
