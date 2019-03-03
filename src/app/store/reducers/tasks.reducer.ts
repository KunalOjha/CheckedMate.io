import { Task } from "models.ts/task";
import { TaskListActions, REQUEST_USER_TASKS, REQUEST_USER_TASKS_SUCCESS } from '../actions/tasks.actions';

export interface State  {
    completed: Task[],
    upcoming: Task[],
    pastDue: Task[]
}

const INITIAL_TASK_LIST_STATE: State = {
    completed: [],
    upcoming: [],
    pastDue: []

}

export function taskListReducer(state = INITIAL_TASK_LIST_STATE, action) {
    switch(action.type) {
        case REQUEST_USER_TASKS_SUCCESS:
            let pastDue = [];
            let upcoming = [];
            let completed = [];

            action.payload.forEach(task => {
                if (task.completed) completed.push(task);
                else if (new Date(task.dueDate) < new Date()) pastDue.push(task);
                else upcoming.push(task);
            });
            return {
                ...state,
                completed,
                upcoming,
                pastDue
            } 
    }
    return state
}