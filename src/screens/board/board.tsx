import React from 'react';
import { Card } from 'react-native-elements';

import { useStatusFilter } from './board.state';
import { BoardStyle } from './board.style';

import { NavBar } from '../../components/nav-bar/';
import { TasksList } from '../../components/tasks-list';
import { IconButton } from '../../components/icon-button';

import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';



// TODO: add status to everyone
const tasks = [
  {
    id: 1,
    status: "inReview",
    title: "Ya v dushe ne eby"
  },
  {
    id: 2,
    status: "inReview",
    title: "Ya v dushe ne eby!"
  },
  {
    id: 3,
    status: "done",
    title: "qwexdwaxd"
  },
  {
    id: 4,
    status: "todo",
    title: "Yasdasdasdsd"
  },
  {
    id: 5,
    status: "done",
    title: "Ya aDdd"
  }
];

const allStatuses = [
  {
    id: 1,
    status: "backlog",
    displayedName: "Back Log",
    order: 0
  },
  {
    id: 2,
    status: "todo",
    displayedName: "To Do",
    order: 1
  },
  {
    id: 3,
    status: "inProgress",
    displayedName: "In Progress",
    order: 2
  },
  {
    id: 4,
    status: "inReview",
    displayedName: "In Review",
    order: 3
  },
  {
    id: 4,
    status: "done",
    displayedName: "Done",
    order: 4
  }
];

const startFrom = "todo";
interface IItemListProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

// TODO: rename to Board + board.tsx
export const Board: React.FC<IItemListProps> = props => {
  const { navigation } = props;
  const [selected, prev, next] = useStatusFilter(allStatuses, startFrom);
  const displayedTasks = tasks.filter(task => task.status === selected.status);

  // TODO: create hook with changing status;

  return (
    <BoardStyle.List>
      {/* TODO: pass props with changing status */}
      <NavBar prevHandler={prev} headerStatus={selected.displayedName} nextHandler={next} />
      <Card>
        <TasksList tasks={displayedTasks} />
      </Card>
      <IconButton navigation={navigation} />
    </BoardStyle.List>
  );
};
