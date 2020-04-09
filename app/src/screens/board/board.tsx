import React, { useState, useEffect } from "react";
import { Card } from "react-native-elements";

import { useBoard } from "./board.state";
import { BoardStyle } from "./board.style";

import { NavBar } from "../../components/nav-bar/";
import { TasksList } from "../../components/tasks-list";
import { IconButton } from "../../components/icon-button";

import { allStatuses } from "../../constants/task-statuses";

import * as ROUTES from "../../constants/routes";

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
  const { navigation } = props;

  const [
    getTasks,
    tasks,
    selectedStatus,
    prev,
    next,
    { isPrevDisabled },
    { isNextDisabled },
  ] = useBoard(allStatuses, startFrom);

  const displayedTasks = tasks.filter(
    (task) => task.status === selectedStatus.status
  );

  const navigateToCreateTask = () => navigation.navigate(ROUTES.CREATETASK, { getTasks });

  const navigateToEditTask = (task) =>
    navigation.navigate(ROUTES.CREATETASK, { task, getTasks });

  return (
    <BoardStyle.List>
      <NavBar
        prevHandler={prev}
        headerStatus={selectedStatus.displayedName}
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
