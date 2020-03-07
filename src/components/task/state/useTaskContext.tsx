import { useContext } from 'react';

import { Task, TaskText } from '../../../core/modules/task/domain/model/Task';
import { getTaskActionDispatchers } from './taskActions';
import { TaskContext } from '../TaskContextProvider';

interface TaskContextProps {
  tasks: Task[];
  createTask(taskText: TaskText): void;
  deleteTask(task: Task): void;
  updateTasks(): void;
}

export function useTaskContext(): TaskContextProps {
  const { dispatch, ...contextState } = useContext(TaskContext);
  const dispatchers = getTaskActionDispatchers(dispatch);

  return {
    ...contextState,
    ...dispatchers,
  };
}
