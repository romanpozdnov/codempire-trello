import React from 'react';
import { Card } from 'react-native-elements';

import { useStatusFilter } from './board.state';
import { BoardStyle } from './board.style';

import { NavBar } from '../../components/nav-bar/';
import { TasksList } from '../../components/tasks-list';
import { IconButton } from '../../components/icon-button';

import { allStatuses } from '../../constants/statuses';

import * as ROUTES from '../../constants/routes';

import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

const tasks = [
  {
    id: 1,
    status: 'inReview',
    title: 'Ya v dushe ne eby',
  },
  {
    id: 2,
    status: 'inReview',
    title: 'Ya v dushe ne eby!',
  },
  {
    id: 3,
    status: 'done',
    title: 'qwexdwaxd',
  },
  {
    id: 4,
    status: 'todo',
    title: 'Yasdasdasdsd',
  },
  {
    id: 5,
    status: 'done',
    title: 'Ya aDdd',
  },
];

const startFrom = 'todo';
interface IItemListProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const Board: React.FC<IItemListProps> = props => {
  const { navigation } = props;
  const [
    selected,
    prev,
    next,
    { isPrevDisabled },
    { isNextDisabled },
  ] = useStatusFilter(allStatuses, startFrom);

  const displayedTasks = tasks.filter(task => task.status === selected.status);

  const navigateToCreateTask = () => navigation.navigate(ROUTES.CREATETASK);

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
        <TasksList tasks={displayedTasks} />
      </Card>
      <IconButton handleIconButton={navigateToCreateTask} />
    </BoardStyle.List>
  );
};
