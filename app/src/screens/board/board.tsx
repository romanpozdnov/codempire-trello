import React, { useState, useEffect } from "react";
import { Card } from "react-native-elements";

import { useStatusFilter } from "./board.state";
import { BoardStyle } from "./board.style";

import { NavBar } from "../../components/nav-bar/";
import { TasksList } from "../../components/tasks-list";
import { IconButton } from "../../components/icon-button";

import { allStatuses } from "../../constants/statuses";

import * as ROUTES from "../../constants/routes";

import { tasksAPI } from "../../api";

import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";

const startFrom = "todo";
interface IItemListProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const Board: React.FC<IItemListProps> = (props) => {
  const [tasks, setTasks] = useState([]);

  const { navigation } = props;

  useEffect(() => {
    const fetchData = async () => {
      const result = await tasksAPI.getAllTasks();
      setTasks(result.data);
    };
    fetchData();
  }, [tasks]);

  const [
    selected,
    prev,
    next,
    { isPrevDisabled },
    { isNextDisabled },
  ] = useStatusFilter(allStatuses, startFrom);

  const displayedTasks = tasks.filter(
    (task) => task.status === selected.status
  );

  const navigateToCreateTask = () => navigation.navigate(ROUTES.CREATETASK);

  const navigateToEditTask = (task) =>
    navigation.navigate(ROUTES.CREATETASK, { task });

  return (
    <BoardStyle.List>
      <NavBar
        prevHandler={prev}
        headerStatus={selected.displayedName}
        nextHandler={next}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />
      <Card>
        <TasksList tasks={displayedTasks} onItemClick={navigateToEditTask} />
      </Card>
      <IconButton handleIconButton={navigateToCreateTask} />
    </BoardStyle.List>
  );
};
